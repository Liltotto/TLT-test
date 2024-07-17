import { useEffect, useState } from "react";
import CardsItem from "../cardsItem/cardsItem";
import { MyPagination } from "../UI/myPagination/myPagination";
import { fetcher } from "@/helpers/fetcher";
import useSWR from "swr";
import { getCookie } from "@/app/actions/cookie";
import { _apiBase } from "@/constants/apiBase";
import { getPageCount } from "@/utils/pagesCount";
import TabularList from "../tabularList/tabularList";
import CardList from "../cardList/cardList";
import { getProductsWithManufactorNames } from "@/utils/updatedProducts";
import { userStore } from "@/store/user";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  photoUrl: string;
  manufacturerId: number;
}

export interface Manufacturer {
  id: number;
  name: string;
}

export interface ResultProduct extends Product {
  manufacturerName: string;
}

export default function ListWrapper({selectedOption, searchQuery} : {selectedOption: string, searchQuery: string}) {
  const [totalPages, setTotalPages] = useState<number>(0);
  const [limit, setLimit] = useState(0);
  const [page, setPage] = useState(1);
  const [resultProducts, setResultProducts] = useState<ResultProduct[]>([]);
  
  const setManufacturers = userStore((state) => state.setManufacturers);

  useEffect(() => {
    setPage(1);
  }, [limit])

//   const [selectedOption, setSelectedOption] = useState("tabular");

//   const { pagesArray } = usePagination(totalPages);

  const {
    data: manufacturers,
    error: manufacturersError,
  } = useSWR(
    _apiBase + `/manufacturers`,
    async (url) => {
      const cookieToken = await getCookie();
      return fetcher(url, cookieToken!);
    },
  );

  const {
    data: products,
    error: productsError,
  } = useSWR(
    _apiBase + `/products?_limit=${limit}&_page=${page}&q=${searchQuery}`,
    async (url) => {
      const cookieToken = await getCookie();
      return fetcher(url, cookieToken!);
    },
  );

//   const getProductsWithManufactorNames = (products: Product[], manufacturers: Manufacturer[]) => {
//     return products.map((product) => {
//       const manufacturer = manufacturers.find((manufacturer) => manufacturer.id === product.manufacturerId);
//       return {
//         ...product,
//         manufacturerName: manufacturer ? manufacturer.name : '',
//       };
//     });
//   }

  useEffect(() => {
    if (!products || !manufacturers) return;
    setManufacturers(manufacturers.data);
    const updatedProducts = getProductsWithManufactorNames(products.data, manufacturers.data);
    setResultProducts(updatedProducts);
  }, [products, manufacturers]);

  useEffect(() => {
    if (!products) return;
    const totalCount = products.headers.get("X-Total-Count");
    setTotalPages(getPageCount(Number(totalCount!), limit));
  }, [products]);

  if (productsError || manufacturersError) {
    return <div>Ошибка: {productsError || manufacturersError}</div>;
  }

  return (
    <div>
      {selectedOption === "tabular" ? <TabularList setLimit={setLimit} products={resultProducts} manufacturers={manufacturers?.data}/> : null}
      {selectedOption === "card" ? <CardList setLimit={setLimit} products={resultProducts} /> : null}

      <div className="absolute bottom-[62px] right-1/2 translate-x-1/2">
        <MyPagination
          totalPages={totalPages}
          setCurrentPage={setPage}
          currentPage={page}
        />
      </div>
    </div>
  );
}
