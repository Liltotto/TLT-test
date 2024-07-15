'use server'

import { decrypt } from "@/app/_lib/session";
import { _apiBase } from "@/constants/apiBase";
// import { cookies_token } from "@/constants/cookie";
import { fetcher } from "@/helpers/fetcher";
import { cookies } from "next/headers";
// import { cookies } from "next/headers";
import useSWR from "swr";


export const products = async () => await decrypt(cookies().get('session')?.value);