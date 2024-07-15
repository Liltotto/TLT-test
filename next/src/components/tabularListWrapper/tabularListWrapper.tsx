'use server'

import { _apiBase } from "@/constants/apiBase"
// import { fetcher } from "@/helpers/fetcher"
import { cookies } from "next/headers"
// import useSWR from "swr"

import TabularList from "../tabularList/tabularList"
import { decrypt, Welcome } from "@/app/_lib/session"


export default async function TabularListWrapper() {


    const session = cookies().get('session')?.value
    const parsed: Welcome | undefined = await decrypt(session);
    const cookies_token = parsed?.user.token

    // const fetcherWithToken = async (url) => {
    //     return fetcher(url, cookies_token);
    //   }

 
   
    // const { data: products, isLoading, isValidating, error } = useSWR([_apiBase + '/products', cookies_token],([url, token])=> fetcher(_apiBase + '/products', cookies_token!)
    // )

    // if (error) {
    //     return <div>Ошибка: {error}</div>;
    // }

    // if (isLoading) {
    //     return <div>Загрузка...</div>;
    // }

    // if (isValidating) {
    //     return <div>Обновление данных...</div>;
    // }

    return (
        <TabularList cookieToken={cookies_token!}/>
    )
}
