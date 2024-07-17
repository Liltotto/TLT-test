// import React from 'react'

import { ResultProduct } from "../listWrapper/listWrapper";

export default function CardsItem({ product }: { product: ResultProduct }) {

  // if(product.photoUrl.includes('')) return null

  return (
    <div className="p-2.5 flex flex-col content-center gap-0.5 w-[244px] h-[334px]">
      {/* background: url(image) ВАЖНО!! */}

      <div className="my-0 mx-auto">
        <img
          className="rounded-[10px] w-[224px] h-[224px] object-cover"
          src={product.photoUrl}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="my-0 mx-auto w-full flex flex-col pt-[5px] gap-[10px]">
          <div className="text-center text-slate-900 text-base font-normal leading-[19px] tracking-[0%] text-ellipsis overflow-hidden whitespace-nowrap">
            {product.name}
          </div>
          <div className="text-center text-slate-900 text-[13px] font-normal leading-4 tracking-[0%]  text-ellipsis overflow-hidden whitespace-nowrap  ">
            {product.manufacturerName}
          </div>
        </div>
        <div className=" flex justify-between p-2.5">
          <span className="text-slate-900 text-[13px] font-normal leading-4 tracking-[0%]">
            {product.quantity}
          </span>
          <span className="text-slate-900 text-[13px] font-normal leading-4 tracking-[0%]">
            {product.price} р
          </span>
        </div>
      </div>
    </div>
  );
}
