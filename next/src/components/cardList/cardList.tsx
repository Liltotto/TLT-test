// import React from 'react'

import { useEffect, useState } from "react";
import CardsItem from "../cardsItem/cardsItem";
import { MyPagination } from "../UI/myPagination/myPagination";
import { fetcher } from "@/helpers/fetcher";
import useSWR from "swr";
import { getCookie } from "@/app/actions/cookie";
import { _apiBase } from "@/constants/apiBase";
import { getPageCount } from "@/utils/pagesCount";
import { Product, ResultProduct } from "../listWrapper/listWrapper";

export default function CardList({products, setLimit}: {products: ResultProduct[],setLimit: (limit: number) => void} ) {

    useEffect(() => {
        setLimit(8)
    }, [])


    // const [totalPages, setTotalPages] = useState<number>(0);
 
    // const [page, setPage] = useState(1);
    // const limit = 6;
    
    // const {pagesArray} = usePagination(totalPages)
   
    
  
    // const {
    //   data: products,
    //   isLoading,
    //   isValidating,
    //   error,
    // } = useSWR(_apiBase + `/products?_limit=${limit}&_page=${page}`, async (url) => {
    //   const cookieToken = await getCookie();
    //   return fetcher(url, cookieToken!);
    // });
  
    // useEffect(() => {
    //   if(!products) return
    //   const totalCount = products.headers.get("X-Total-Count");
    //   setTotalPages(getPageCount(Number(totalCount!), limit));
    // }, [products]);
  
  
    // if (error) {
    //   return <div>Ошибка: {error}</div>;
    // }

  return ( 
      <div className="grid grid-cols-4 gap-[15px] mx-auto">
        {products?.map((product: ResultProduct) => (
          <CardsItem key={product.id} product={product} />
        ))}
      </div>
  );
}
