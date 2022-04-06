import { FC, useEffect, useReducer } from "react";
import { ICartProduct } from "../../interfaces";
import { CartContext } from "./";
import { cartReducer } from "./cartReducer";


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
}


export const CartProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)


  useEffect(() => {
        
    const numberOfItems = state.cart.reduce( ( prev, current ) => current.quantity + prev , 0 );
    const subTotal = state.cart.reduce( ( prev, current ) => (current.price * current.quantity) + prev, 0 );
    const taxRate =  Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);

    const orderSummary = {
        numberOfItems,
        subTotal,
        tax: subTotal * taxRate,
        total: subTotal * ( taxRate + 1 )
    }

    dispatch({ type: '[Cart] - Update order summary', payload: orderSummary });
}, [state.cart]);

  const addProductToCart = ( product: ICartProduct ) => {

    // 1. Buscar el producto en el carrito
    const productInCart = state.cart.some( p => p.id === product.id );
    if ( !productInCart ) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product ] })

    // 2. Producto ya existe en el carrito, actualizar la cantidad
    const updatedProducts = state.cart.map( p => {
        if ( p.id !== product.id ) return p;

        // Actualizar la cantidad
        p.quantity += product.quantity;
        return p;
    });
    
    dispatch({ type: '[Cart] - Update products in cart', payload: updatedProducts });

}

const updateCartQuantity = ( product: ICartProduct ) => {
    dispatch({ type: '[Cart] - Change cart quantity', payload: product });
}

const removeCartProduct = ( product: ICartProduct ) => {
    dispatch({ type: '[Cart] - Remove product in cart', payload: product });
}

const createOrder = async():Promise<{ hasError: boolean; message: string; }> => {
    try {
        
        // const { data } = await deALGO;

        const data: any= {}
        
        dispatch({ type: '[Cart] - Order complete' });

        return {
            hasError: false,
            message: data.id!
        }


    } catch (error) {
        return {
            hasError: true,
            message : 'Error no controlado, hable con el administrador'
        }
    }

}
  
  
  return <CartContext.Provider value={{  ...state,

    // Methods
    addProductToCart,
    removeCartProduct,
    updateCartQuantity,

    // Orders
    createOrder,}}>{children}</CartContext.Provider>;
};
