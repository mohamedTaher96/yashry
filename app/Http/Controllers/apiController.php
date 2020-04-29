<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;

use App\User;
use App\Menu;
use App\Order;
use App\Favorite;
use App\Order_Items ;
use App\Rateing;

use Hash;

class apiController extends Controller
{
    public function menu(){
        $menu = Menu::paginate(8);
        return["status"=>1,"menu"=>$menu];
    }
    public function search(Request $request){
        $menu = Menu::where('name','like',"%$request->search%")->get();
        return["status"=>1,"menu"=>$menu];
    }
    public function home(){
        $menu = Menu::take(7)->get();
        $rate = Rateing::with('user')->take(10)->get();
        return["status"=>1,"menu"=>$menu,"rate"=>$rate];
    }
    public function new_order(Request $request)
    {
        $order = Order::create(
            ['total'=>$request->total,
            "user_id"=>$request->user_id,
            "name" =>$request->info['name']['value'],
            "address"=>$request->info['address']['value'],
            "contact"=>$request->info['contact']['value'],
            ]
        );
        foreach($request->order as $item)
        {
            Order_Items::create(['menu_id'=>$item['id'],"order_id"=>$order->id]);
        }
        $data = Order::where('id',$order->id)->with('order_items')->first();
        $data->date =  date("Y-m-d", strtotime(str_replace('-', '/', $data->created_at))); ;
        return["status"=>1,"order"=>$data];
    }
    public function login(Request $request){
        $user = User::where('email',$request->email)->first();
        if($user&&Hash::check($request->password, $user->password))
        {
            return["status"=>1,"data"=>$user];
        }
        return["status"=>0];
    }
    public function register(Request $request){
        $validator = validator::make($request->all(),[
            'name'=>'required',
            'email'=>'required|email|unique:users',
            'password'=>'required|confirmed|min:6',
            'phone'=>'required|numeric'
         ]);
         if($validator->fails())
         {
            return['status'=>0,'data'=>$validator->errors()];
         }
        $input = $request->all();
        $input['password']=Hash::make($request->password);
        $user = User::create($input);
        return["status"=>1,'data'=>$user];
    }
}
?>