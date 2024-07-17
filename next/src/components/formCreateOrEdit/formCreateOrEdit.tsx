"use client";

import React, { useState } from "react";
import MySelector from "../UI/mySelector/mySelector";
import {MyFileUploader} from "../UI/myFileUploader/myFileUploader";

export default function FormCreateOrEdit() {
  const [selectedOption, setSelectedOption] = useState("Компания");

  return (
    <>
      <h2 className="text-center">Создание товара</h2>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <h6>Название</h6>
            <input
              name="name"
              type="text"
              placeholder="Название"
              className="p-text bg-[#1118271F] placeholder:text-[#888F99] pl-[10px] py-[6px] block w-full rounded-md border focus:border-[#1118271F] focus:bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <h6>Количество</h6>
            <input
              name="quantity"
              placeholder="Количество"
              className="p-text bg-[#1118271F] placeholder:text-[#888F99] pl-[10px] py-[6px] block w-full rounded-md border focus:border-[#1118271F] focus:bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <h6>Цена</h6>
            <input
              name="price"
              placeholder="Цена"
              className="p-text bg-[#1118271F] placeholder:text-[#888F99] pl-[10px] py-[6px] block w-full rounded-md border focus:border-[#1118271F] focus:bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <h6>Производитель</h6>
            {/* <div className="relative inline-block">
										<select className="p-text block appearance-none w-full bg-[#1118271F] text-[#888F99] pl-[10px] py-[6px] rounded shadow leading-tight focus:outline-none focus:shadow-outline">
											<option value='' disabled selected hidden>Компания</option>
											<option value='1'>Компания 1</option>
											<option value='2'>Компания 2</option>
											<option value='3'>Компания 3</option>
											<option value='4'>Компания 4</option>
										</select>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
											<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
										</div>
									</div> */}
            <MySelector
              options={["Option 1", "Option 2", "Option 3"]}
              selectedOption={selectedOption}
              onOptionSelect={setSelectedOption}
              // className='p-text bg-[#1118271F] placeholder:text-[#888F99] pl-[10px] py-[6px] block w-full rounded-md border focus:border-[#1118271F] focus:bg-transparent outline-none'
            />
          </div>
        </div>
        <MyFileUploader />
      </div>
    </>
  );
}
