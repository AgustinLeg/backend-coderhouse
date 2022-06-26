import { FC, useEffect, useReducer } from "react";
import { ICartProduct } from "../../interfaces";
import { CartContext } from "./";
import { cartReducer } from "./cartReducer";
import { IProduct } from "../../interfaces/products";

export interface CartState {
  isLoaded: boolean;
  cart: ICartProduct[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
}

const CART_INITIAL_STATE: CartState = {
  isLoaded: false,
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
};

interface Props {
  children: any;
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    const numberOfItems = state.cart.reduce(
      (prev, current) => current.quantity + prev,
      0
    );
    const subTotal = state.cart.reduce(
      (prev, current) =>
        Number(current.price) * Number(current.quantity) + prev,
      0
    );

    console.log(state.cart);

    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);

    const orderSummary = {
      numberOfItems,
      subTotal,
      tax: subTotal * taxRate,
      total: subTotal * (taxRate + 1),
    };

    dispatch({ type: "[Cart] - Update order summary", payload: orderSummary });
  }, [state.cart]);

  const addProductToCart = (product: IProduct) => {
    // 1. Buscar el producto en el carrito

    const productCart = { ...product, quantity: 1 } as any;

    const productInCart = state.cart.some((p) => p.id === product.id);
    if (!productInCart)
      return dispatch({
        type: "[Cart] - Update products in cart",
        payload: [...state.cart, productCart],
      });

    // 2. Producto ya existe en el carrito, actualizar la cantidad
    const updatedProducts = state.cart.map((p) => {
      if (p.id !== product.id) return p;

      // Actualizar la cantidad
      p.quantity = p.quantity + 1;
      return p;
    });

    dispatch({
      type: "[Cart] - Update products in cart",
      payload: updatedProducts,
    });
  };

  const clearCart = () => {
    dispatch({ type: "[Cart] - clear cart" });
  };

  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({ type: "[Cart] - Change cart quantity", payload: product });
  };

  const removeCartProduct = (id: string) => {
    dispatch({ type: "[Cart] - Remove product in cart", payload: id });
  };

  const createOrder = async (): Promise<{
    hasError: boolean;
    message: string;
  }> => {
    try {
      // const { data } = await deALGO;

      const data: any = {};

      dispatch({ type: "[Cart] - Order complete" });

      return {
        hasError: false,
        message: data.id!,
      };
    } catch (error) {
      return {
        hasError: true,
        message: "Error no controlado, hable con el administrador",
      };
    }
  };

  return (
    <CartContext.Provider
      value={{
        ...state,

        // Methods
        addProductToCart,
        removeCartProduct,
        updateCartQuantity,
        clearCart,

        // Orders
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
