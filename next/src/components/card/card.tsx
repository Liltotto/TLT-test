// import React from 'react'

export default function Card() {
  return (
    <div className="p-2.5 flex flex-col content-center gap-0.5 w-[244px] h-[334px]">

        {/* background: url(image) ВАЖНО!! */}

        <div className="my-0 mx-auto"><img className="rounded-[10px] w-[224px] h-[224px] object-contain" src="https://img.directindustry.com.ru/images_di/photo-mg/15042-18946280.jpg" alt="card_image" /></div>
        <div className="flex flex-col gap-0.5">
            <div className="my-0 mx-auto flex flex-col pt-[5px] gap-[10px]">
                <span className="text-center text-slate-900 text-base font-normal leading-[19px] tracking-[0%]">Лампа</span>
                <span className="text-center text-slate-900 text-[13px] font-normal leading-4 tracking-[0%]">Ламповый завод</span>
            </div>
            <div className=" flex justify-between p-2.5">
                <span className="text-slate-900 text-[13px] font-normal leading-4 tracking-[0%]">12 шт</span>
                <span className="text-slate-900 text-[13px] font-normal leading-4 tracking-[0%]">12.57 р</span>
            </div>
        </div>
    </div>
  )
}
