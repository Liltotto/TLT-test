"use client";

import React, { useState } from "react";
import MySelector from "../UI/mySelector/mySelector";
import MyFileUploader from "../UI/myFileUploader/myFileUploader";

export default function FormCreateOrEdit() {
  const [selectedOption, setSelectedOption] = useState("Select an option");

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
            <h6>Password</h6>
            <input
              name="password"
              placeholder="Password"
              className="p-text bg-[#1118271F] placeholder:text-[#888F99] pl-[10px] py-[6px] block w-full rounded-md border focus:border-[#1118271F] focus:bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <h6>Password</h6>
            <input
              name="password"
              placeholder="Password"
              className="p-text bg-[#1118271F] placeholder:text-[#888F99] pl-[10px] py-[6px] block w-full rounded-md border focus:border-[#1118271F] focus:bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <h6>Password</h6>
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

        {/* <div className='flex flex-col gap-1'>
                                <div className='flex flex-col gap-1'>
                                    <h6>Password</h6>
                                    <input
                                        type='file'
                                        name='password'
                                        placeholder='Password'
                                        className='p-text bg-[#C9CFD8] placeholder:text-[#888F99] pl-[10px] py-[6px] block w-full rounded-md border focus:border-[#C9CFD8] focus:bg-transparent outline-none'
                                    />
                                </div>

                            </div> */}

        {/* <div className="flex flex-col w-full">
								<h6>Фото</h6>
								<label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-[298ps] h-[64px] border-gray-300 rounded-lg cursor-pointer">
									<div className="flex flex-col items-center justify-center pt-5 pb-6">
										<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Загрузить фото</p>

										<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M4.47812 3.93387C4.67178 3.30448 5.25329 2.875 5.91179 2.875H8C8.41421 2.875 8.75 2.53921 8.75 2.125C8.75 1.71079 8.41421 1.375 8 1.375H5.91179C4.59478 1.375 3.43177 2.23397 3.04446 3.49274L0.632663 11.3311C0.544715 11.6169 0.5 11.9143 0.5 12.2133V16.375C0.5 18.0319 1.84315 19.375 3.5 19.375H18.5C20.1569 19.375 21.5 18.0319 21.5 16.375V12.2133C21.5 11.9143 21.4553 11.6169 21.3673 11.3311L18.9555 3.49274C18.5682 2.23397 17.4052 1.375 16.0882 1.375H14C13.5858 1.375 13.25 1.71079 13.25 2.125C13.25 2.53921 13.5858 2.875 14 2.875H16.0882C16.7467 2.875 17.3282 3.30448 17.5219 3.93387L19.7345 11.125H16.8906C15.7543 11.125 14.7155 11.767 14.2073 12.7834L13.9511 13.2958C13.697 13.804 13.1776 14.125 12.6094 14.125H9.39058C8.82242 14.125 8.30302 13.804 8.04894 13.2958L7.79271 12.7834C7.28453 11.767 6.24574 11.125 5.10942 11.125H2.26547L4.47812 3.93387Z" fill="#475569" />
											<path fill-rule="evenodd" clip-rule="evenodd" d="M11 0.625C11.4142 0.625 11.75 0.960786 11.75 1.375V7.81434L13.4697 6.09467C13.7626 5.80178 14.2374 5.80178 14.5303 6.09467C14.8232 6.38756 14.8232 6.86244 14.5303 7.15533L11.5303 10.1553C11.2374 10.4482 10.7626 10.4482 10.4697 10.1553L7.46967 7.15533C7.17678 6.86244 7.17678 6.38756 7.46967 6.09467C7.76256 5.80178 8.23744 5.80178 8.53033 6.09467L10.25 7.81434V1.375C10.25 0.960786 10.5858 0.625 11 0.625Z" fill="#475569" />
										</svg>

									</div>
									<input id="dropzone-file" type="file" className="hidden" />
								</label>
							</div> */}

        <MyFileUploader />
      </div>
      {/* <div className='flex justify-end gap-2.5'>
                    <button onClick={clickHandler} className={'px-6 py-2 rounded-md font-medium text-base transition duration-200 bg-slate-800 hover:bg-slate-600 text-white'}>
                        Отмена
                    </button>
                    <button className={'px-6 py-2 rounded-md font-medium text-base transition duration-200 bg-slate-300 hover:bg-slate-400'}>
                        Создать
                    </button>
                </div> */}
    </>
  );
}
