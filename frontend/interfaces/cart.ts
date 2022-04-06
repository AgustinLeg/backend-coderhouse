import { IProduct } from ".";

export interface ICartProduct {
  id: string;
  name: string;
  image: string;
  timestamp: string;
  price: number;
  quantity: number;
}
