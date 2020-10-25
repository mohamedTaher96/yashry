<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ItemResource;

class BillResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=> $this->id,
            'subtotal'=> $this->subtotal,
            'discount' => $this->discount,
            'discount_txt'=>$this->discount_txt?explode(",",$this->discount_txt):null,
            'tax'=> $this->tax,
            'total' => $this->total,
            'currency'=> [
                'key'=>$this->currency->key,
                'price_to_default'=>$this->currency->price_to_default,
            ],
            'items' => ItemResource::collection($this->items),
            'date'=> $this->created_at->diffforhumans(),
        ];
    }
}
