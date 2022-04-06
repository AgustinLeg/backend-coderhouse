import useSWR, { SWRConfiguration } from "swr";
import { IProduct } from "../interfaces";

const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json());

export interface UseProducts {
  products: IProduct | IProduct[];
  isLoading: boolean;
  isError: {error: string}
}

export const useProducts = (url: string, config: SWRConfiguration = {}) : UseProducts=> {
    
  const { data, error } = useSWR<IProduct[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/api${url}`,
    fetcher,
    config
  );



  return {
    products: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
