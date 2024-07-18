import { getCookie } from "@/app/_actions/cookie";
import { _apiBase } from "@/constants/apiBase";
import { fetcher } from "@/helpers/fetcher";

export const getProductById = async (id: number) => {
  const cookieToken = await getCookie();
  const product = await fetcher(_apiBase + "/products/" + id, cookieToken!);
  return product;
};
