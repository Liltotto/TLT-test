"use client";

import React, { useEffect, useState } from "react";
import MySelector from "../../UI/mySelector/mySelector";
import { MyFileUploader } from "../../UI/myFileUploader/myFileUploader";
import { userStore } from "@/store/user";
import { getManufacturerId } from "@/utils/updatedProducts";
import { useSWRConfig } from "swr";
import { fetcherPost } from "@/helpers/fetcher";
import { getCookie } from "@/app/actions/cookie";
import { IDataTOCreate } from "@/components/layouts/mainSection";

interface Props {
  isEditing?: boolean
  dataToPost?: IDataTOCreate 
  setDataToCreate?: (data: IDataTOCreate) => void
}

export default function FormCreateOrEdit({isEditing, dataToPost, setDataToCreate} : Props) {

  const {mutate} = useSWRConfig()

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price , setPrice] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [manufacturerId, setManufacturerId] = useState(0);

  const [manufacturersArray, setManufacturersArray ] = useState<string[]>([]);

  const [selectedOption, setSelectedOption] = useState("Компания");

  const manufacturers = userStore( (state) => state.manufacturers);

  useEffect(()=>{
    if(!manufacturers) return
    manufacturers.map((manufacturer)=>{
      setManufacturersArray(prev => [...prev, manufacturer.name])
    })
  }, [manufacturers])

  useEffect(()=>{
    if(!manufacturers) return
    const manufacturerIdData = getManufacturerId(selectedOption, manufacturers)
    setManufacturerId(manufacturerIdData!)
  }, [selectedOption])

  useEffect(()=>{
    if(!setDataToCreate) return
    setDataToCreate({
      name,
      price,
      quantity,
      file,
      manufacturerId
    })
  }, [name, price, quantity, file, manufacturerId])

 


 

  return (
    <>
      <h2 className="text-center text-2xl font-medium leading-[29px] tracking-[0%]">{isEditing ? "Редактирование товара" : "Создание товара"}</h2>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-1 px-2.5">
            <h6 className="text-[15px] font-normal leading-[18px] tracking-[0%]">Название</h6>
            <input
              name="name"
              type="text"
              placeholder="Название"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-text bg-[#1118271F] placeholder:text-[#888F99] pl-[10px] py-[6px] block w-full rounded-md border focus:border-[#1118271F] focus:bg-transparent outline-none"
            />
        </div>

        <div className="flex flex-col gap-1 px-2.5">
            <h6 className="text-[15px] font-normal leading-[18px] tracking-[0%]">Количество</h6>
            <input
              name="quantity"
              placeholder="Количество"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="p-text bg-[#1118271F] placeholder:text-[#888F99] pl-[10px] py-[6px] block w-full rounded-md border focus:border-[#1118271F] focus:bg-transparent outline-none"
            />
        </div>

        <div className="flex flex-col gap-1 px-2.5">
            <h6 className="text-[15px] font-normal leading-[18px] tracking-[0%]">Цена</h6>
            <input
              name="price"
              placeholder="Цена"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="p-text bg-[#1118271F] placeholder:text-[#888F99] pl-[10px] py-[6px] block w-full rounded-md border focus:border-[#1118271F] focus:bg-transparent outline-none"
            />
        </div>

        <div className="flex flex-col gap-1 px-2.5">
          
            <h6 className="text-[15px] font-normal leading-[18px] tracking-[0%]">Производитель</h6>
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
              options={manufacturersArray}
              selectedOption={selectedOption}
              onOptionSelect={setSelectedOption}
              // className='p-text bg-[#1118271F] placeholder:text-[#888F99] pl-[10px] py-[6px] block w-full rounded-md border focus:border-[#1118271F] focus:bg-transparent outline-none'
            />
        </div>
        <MyFileUploader file={file} setFile={setFile} />
      </div>
    </>
  );
}
