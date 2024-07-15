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
  // const { data: products } = useSWR(_apiBase + '/products', await fetcher(_apiBase + '/products',
  //     {
  //         method: 'GET',
  //         headers: {
  //             authorization: `Token ${cookies().get('session')?.value}`,
  //         }
  //     }
  // ))
  // useEffect(() => {
  //     if (!isLoading && !error) {
  //         console.log(products);
  //     }
  // },[products])

  // useEffect(() => {
  //     console.log(cookies_token);
  // }, [cookies_token])

  // const fetcher = (url: string, token: string) => fetch(url, {
  //     method: 'GET',
  //     headers: {
  //         authorization: `Token ${token}`,
  //     }
  // }).then(res => res.json());

  // fetch(_apiBase + '/products', {
  //     method: 'GET', // Обеспечьте правильный метод
  //     headers: {
  //       authorization: `Token ${cookies_token}` // Заголовок с учетом регистра
  //     }
  //   })
  //   .then(res => {
  //     if (!res.ok) {
  //       throw new Error(`Запрос API завершился с кодом ${res.status}`);
  //     }
  //     return res.json();
  //   });

  // const tokenSession = userStore((state) => state.tokenSession);

  // // const {data: session, status} = useSession();
  // // console.log({session, status});

  // const { data: products, isLoading, isValidating, error } = useSWR([_apiBase + '/products', tokenSession], ([url, token]) => fetcher(_apiBase + '/products', tokenSession));

  // if (error) {
  //     return <div>Ошибка: {tokenSession}</div>;
  // }

  // useEffect(() => {
  //     if (!isLoading && !error) {
  //         console.log(tokenSession);
  //     }
  // }, [tokenSession])

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

  // const fetchData = async () => {
  //     // You'll need to implement your data fetching logic here
  //     // Example using fetch:
  //     const response = await fetch(`${_apiBase}/products`, {
  //         headers: {
  //             'authorization': `Token ${cookieToken}` // Assuming you have a session token
  //         }
  //     });
  //     const data = await response.json();
  //     return data;
  // }

  // const [data, setData] = useState<Product[]>();

  // // Use useEffect to fetch data when the component mounts
  // useEffect(() => {
  //     fetchData().then((data) =>{
  //         console.log(data);
  //         setData(data)
  //     } );
  // }, []);

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
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Ламповый завод</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src="./edit.png"
                    alt="Редактировать"
                    className="w-6 h-6 mr-2"
                  />{" "}
                  <img src="./delete.png" alt="Удалить" className="w-6 h-6" />
                </td>
              </tr>
            ))}
            {/* <tr className="text-[13px] font-normal leading-[16px] tracking-[0%] text-center rounded-md">
                            <td className="px-6 py-4 whitespace-nowrap"><img src="./lamp.png" alt="Лампа" className="w-16 h-16" /></td>
                            <td className="px-6 py-4 whitespace-nowrap">Лампа</td>
                            <td className="px-6 py-4 whitespace-nowrap">12</td>
                            <td className="px-6 py-4 whitespace-nowrap">Ламповый завод</td>
                            <td className="px-6 py-4 whitespace-nowrap">12.57 р</td>
                            <td className="px-6 py-4 whitespace-nowrap"><img src="./edit.png" alt="Редактировать" className="w-6 h-6 mr-2" /> <img src="./delete.png" alt="Удалить" className="w-6 h-6" /></td>
                        </tr>
                        <tr className="text-[13px] font-normal leading-[16px] tracking-[0%] text-center">
                            <td className="px-6 py-4 whitespace-nowrap"><img src="./lamp.png" alt="Лампа" className="w-16 h-16" /></td>
                            <td className="px-6 py-4 whitespace-nowrap">Лампа</td>
                            <td className="px-6 py-4 whitespace-nowrap">12</td>
                            <td className="px-6 py-4 whitespace-nowrap">Ламповый завод</td>
                            <td className="px-6 py-4 whitespace-nowrap">12.57 р</td>
                            <td className="px-6 py-4 whitespace-nowrap"><img src="./edit.png" alt="Редактировать" className="w-6 h-6 mr-2" /> <img src="./delete.png" alt="Удалить" className="w-6 h-6" /></td>
                        </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
