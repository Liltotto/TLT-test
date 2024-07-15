"use client";
import { useState } from "react";
import MySelector from "../mySelector/mySelector";
import cl from "./MyModal.module.scss";
import MyFileUploader from "../myFileUploader/myFileUploader";

type Props = {
  children?: React.ReactNode;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

export const MyModal = ({ children, visible, setVisible }: Props) => {
  const rootClasses = [cl.myModal];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className="bg-slate-100 px-8 py-7 rounded-[10px] shadow-md w-[360px] flex flex-col gap-[20px]"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
        <div className="flex justify-end gap-2.5">
          <button
            onClick={() => setVisible(false)}
            className={
              "px-6 py-2 rounded-md font-medium text-base transition duration-200 bg-slate-800 hover:bg-slate-600 text-white"
            }
          >
            Отмена
          </button>
          <button
            className={
              "px-6 py-2 rounded-md font-medium text-base transition duration-200 bg-slate-300 hover:bg-slate-400"
            }
          >
            Создать
          </button>
        </div>
      </div>
    </div>
  );
};
