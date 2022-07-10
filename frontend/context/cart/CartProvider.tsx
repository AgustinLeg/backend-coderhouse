import { FC, useEffect, useReducer } from "react";
import { ICartProduct } from "../../interfaces";
import { CartContext } from "./";
import { cartReducer } from "./cartReducer";
import { IProduct } from "../../interfaces/products";
import shopApi from "../../api";
import Cookie from "js-cookie";

export interface CartState {
  isLoaded: boolean;
  cart: ICartProduct[];
  numberOfItems: number;
  total: number;
}

const CART_INITIAL_STATE: CartState = {
  isLoaded: false,
  cart: [],
  numberOfItems: 0,
  total: 0,
};

interface Props {
  children: any;
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  // Efecto
  useEffect(() => {
    try {
      const cookieProducts = Cookie.get("cart")
        ? JSON.parse(Cookie.get("cart")!)
        : [];
      dispatch({
        type: "[Cart] - LoadCart from cookies | storage",
        payload: cookieProducts,
      });
    } catch (error) {
      dispatch({
        type: "[Cart] - LoadCart from cookies | storage",
        payload: [],
      });
    }
  }, []);

  // actualizar cookie cart
  useEffect(() => {
    if (state.isLoaded) Cookie.set("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  // actualizar total
  useEffect(() => {
    const numberOfItems = state.cart.reduce(
      (prev, current) => current.quantity + prev,
      0
    );
    const total = state.cart.reduce(
      (prev, current) =>
        Number(current.price) * Number(current.quantity) + prev,
      0
    );

    const orderSummary = {
      numberOfItems,
      total,
    };

    dispatch({ type: "[Cart] - Update order summary", payload: orderSummary });
  }, [state.cart]);

  const addProductToCart = (product: IProduct) => {
    // 1. Buscar el producto en el carrito

    console.log(product);

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

  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({ type: "[Cart] - Change cart quantity", payload: product });
  };

  const removeCartProduct = (id: string) => {
    dispatch({ type: "[Cart] - Remove product in cart", payload: id });
  };

  const createOrder = async (formData: {
    name: string;
    lastName: string;
    email: string;
    address: string;
    phone: string;
  }): Promise<{
    hasError: boolean;
    message: string;
  }> => {
    const token = Cookie.get("token");
    console.log(state.cart);
    const data = {
      orderItems: state.cart,
      total: state.total,
      shippingAddress: formData,
      numberOfItems: state.cart.length,
    };

    console.log(data);

    try {
      const resp = await shopApi.post("/order", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({ type: "[Cart] - Order complete" });

      return {
        hasError: false,
        message: resp.data.id!,
      };
    } catch (error) {
      return {
        hasError: true,
        message: "Error no controlado, hable con el administrador",
      };
    }
  };

  const clearCart = () => dispatch({ type: "[Cart] - Order complete" });

  return (
    <CartContext.Provider
      value={{
        ...state,

        // Methods
        addProductToCart,
        removeCartProduct,
        updateCartQuantity,
        clearCart,

        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
