'use server'

import { decrypt, Welcome } from "@/app/_lib/session";
import { _apiBase } from "@/constants/apiBase";
// import { cookies_token } from "@/constants/cookie";
import { fetcher } from "@/helpers/fetcher";
import { cookies } from "next/headers";
// import { cookies } from "next/headers";
import useSWR from "swr";

export async function getAllProducts() {
    const session = cookies().get('session')?.value
    const parsed: Welcome | undefined = await decrypt(session);
    const cookies_token = parsed?.user.token
    const { data: products, isLoading, isValidating, error } = useSWR([_apiBase + '/products', cookies_token], ([url, token]) => fetcher(_apiBase + '/products', cookies_token!));

    return { products, isLoading, isValidating, error }
}


// export const decryptedToken = async () => await decrypt(cookies().get('session')?.value);