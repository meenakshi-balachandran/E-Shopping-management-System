import { AppContextType } from "../context/AppContext";
import { CartActionType } from "../enum/CartAction";


export type CartAction = {
  type:CartActionType,
  payload?:any
}

export const cartReducer = (state: AppContextType,action: CartAction)  : AppContextType => {
  switch (action.type) {
    case CartActionType.ADD_TO_CART: {
      const existingCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingCartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }: item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case CartActionType.UPDATE_CART_QUANTITY: {
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) => item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }: item
          )
          .filter((item) => item.quantity > 0),
      };
    }
    case CartActionType.EMPTY_CART: {
      return {
        ...state,
        cartItems:[]};
    }
    default:
      return state;
  }
};
