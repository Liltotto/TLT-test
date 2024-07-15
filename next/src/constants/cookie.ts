'use server'

import { decrypt, Welcome } from "@/app/_lib/session";
import { cookies } from "next/headers";

const session = cookies().get('session')?.value
const parsed: Welcome | undefined = await decrypt(session);
export const cookies_token = parsed?.user.token