"use client";

import { _apiBase } from "@/constants/apiBase";
import { fetcher } from "@/helpers/fetcher";
import { useEffect, useState } from "react";
import { getCookie } from "@/app/actions/cookie";
import useSWR from "swr";

// import { _apiBase } from "@/constants/apiBase"
// import { getAllProducts } from "@/services/GoodsService"
// import { cookies_token } from "@/constants/cookie"
// import { fetcher } from "@/helpers/fetcher"
// import useSWR from "swr"
// import { useEffect } from "react"
// import { cookies } from "next/headers"
// import { userStore } from "@/store/user"
// import { useSession } from "next-auth/react"

// const fetcher = (url: string) => {
//     const session = cookies().get('session')?.value;
//     return fetch(url, {
//       method: 'GET',
//       headers: {
//         authorization: `Token ${session}`,
//       }
//     }).then(res => res.json());
//   }

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  photoUrl: string;
}

export default function TabularList() {
  const {
    data: products,
    isLoading,
    isValidating,
    error,
  } = useSWR(_apiBase + "/products", async (url) => {
    const cookieToken = await getCookie();
    return fetcher(url, cookieToken!);
  });

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isValidating) {
    return <div>Обновление данных...</div>;
  }

  return (
    <div>
      <div className="p-2.5 ">
        <table className="min-w-full bg-transparent ">
          <thead>
            <tr className="h-[80px] text-[15px] font-normal leading-[18px] tracking-[0%] ">
              <th className="text-left py-[10px] px-[17px]">Фото</th>
              <th className="py-[10px] px-[17px]">Название</th>
              <th className="py-[10px] px-[17px]">Количество</th>
              <th className="py-[10px] px-[17px]">Производитель</th>
              <th className="py-[10px] px-[17px]">Цена</th>
              <th className="py-[10px] px-[17px]"></th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(odd)]:bg-transparent [&>*:nth-child(even)]:bg-[#0F172A08]">
            {products?.map((product: Product) => (
              <tr className="text-[13px] font-normal leading-[16px] tracking-[0%] text-center rounded-md">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={product.photoUrl}
                    alt={product.name}
                    className="w-16 h-16"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">Ламповый завод</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src="./edit.png"
                    alt="Редактировать"
                    className="w-6 h-6 mr-2"
                  />
                  <img src="./delete.png" alt="Удалить" className="w-6 h-6" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
