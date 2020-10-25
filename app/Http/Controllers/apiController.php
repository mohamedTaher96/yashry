<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Resources\BillResource;

use App\Product;
use App\Offer;
use App\Bill;
use App\Currency;
use App\BillItems;

class apiController extends Controller
{
    public function Products(){

        $products = Product::get();
        $currencies = Currency::orderBy('default','DESC')->get();
        $data['products']=$products;
        $data['currencies'] = $currencies;
        return["status"=>1,"data"=>$data];
    }

    public function billCreate(Request $request)
    {
        $bill = $request->bill;
        $final = null ;
        $final['subtotal'] = 0 ;
        $final['discount'] = 0;
        $currency = Currency::find($request->currency);

        if( $bill && count($bill)>0 && $currency)
        {
            foreach($bill as $item)
            {
                $product = Product::find([$item['id']])->first();
                $final['subtotal'] += $item['qty'] * $product->price * $currency->price_to_default;
                $final['items'][]=[
                    'id'=>$product->id,
                    'qty'=>$item['qty'],
                    'title'=>$product->title,
                    'price'=>$product->price * $currency->price_to_default,
                ];
                
                $offer = Offer::where(['buy_category_id'=>$product->id])->first();
                if($offer)
                {
                    if($item['qty'] >= $offer->buy_no )
                    {
                        foreach($bill as $offer_item)
                        {
                            if($offer->offer_category_id == $offer_item['id'])
                            {
                                $product_item = Product::find([$offer_item['id']])->first();
                                $no = round($item['qty']/$offer->buy_no,0,PHP_ROUND_HALF_DOWN);

                                if($no > $offer_item['qty'])
                                {
                                    
                                    $no = $offer_item['qty'];
                                }
                                
                                $final['discount'] += $no * $offer->offer * $product_item->price * $currency->price_to_default/100;
                                $final['discounts'][]=[
                                    "$offer->offer % off ".$product_item->title." = - ".( $no * $offer->offer * $product_item->price *  $currency->price_to_default/100)
                                ];
                            }
                        }
                    }
                }
            }
            $final['tax'] = 14 * $final['subtotal'] /100;
            $final['currency'] = $currency;
            $final['date'] = now()->format('Y-m-d');


            return ['status'=>1  ,'bill'=>$final];
        }else
        {
            return['status'=>-1,'message'=>'there is no products to buy'];
        }
    }
    public function billStore( Request $request)
    {
        $final = $request->bill;

        $bill = Bill::create([
            'subtotal'=>$final['subtotal'],
            'discount'=>$final['discount'],
            'discount_txt'=>isset($final['discounts'])?implode(",",$final['discounts'][0]):null,
            'tax'=>$final['tax'],
            'total'=>$final['subtotal']+$final['tax']-$final['discount'],
            'currency_id'=>$final['currency']['id']
        ]);
        foreach($final['items'] as $item)
        {
            BillItems::create([
                'bill_id'=>$bill->id,
                'item_id'=>$item['id'],
                'price'=>$item['price'],
                'qty'=>$item['qty'],
            ]);
            return ['status'=>1 , 'message'=>'your bill had been created successfuly !','bill'=>$final];
        }
    }
    public function bills()
    {
        $bills = Bill::get();
        $bills = BillResource::collection($bills);
        return['status'=>1,'message'=>'all bills that had been confirmed','bills'=>$bills];
    }
}

?>