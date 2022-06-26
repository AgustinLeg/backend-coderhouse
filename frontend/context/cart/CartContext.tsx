import { createContext } from "react";
import { ICartProduct } from "../../interfaces";
import { IProduct } from "../../interfaces/products";

interface ContextProps {
  isLoaded: boolean;
  cart: ICartProduct[];
  numberOfItems: number;
  total: number;

  // Methods
  addProductToCart: (product: IProduct) => void;
  updateCartQuantity: (product: ICartProduct) => void;
  removeCartProduct: (id: string) => void;
  clearCart: () => void;

  // Orders
  createOrder: (formData: {
    name: string;
    lastName: string;
    email: string;
    address: string;
    phone: string;
  }) => Promise<{ hasError: boolean; message: string }>;
}

export const CartContext = createContext({} as ContextProps);
