import { ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/reducer.utils';
import { CategoryItem } from '../categories/categories.types';
import { CART_ACTIONS_TYPES, CartItem } from './cart.types';

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  // initialize new cartItems array
  let newCartItems = [];
  // find if cartItems contains product to add
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

  // if found increase the quantity
  if (existingCartItem) {
    newCartItems = cartItems.map(item => {
      if (item.id === productToAdd.id) {
        // increment quantity with 1
        const quantity = item.quantity + 1;
        return { ...productToAdd, quantity };
      } else {
        return item;
      }
    });
  } else {
    newCartItems = [...cartItems, { ...productToAdd, quantity: 1 }];
  }

  return newCartItems;
};

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
};

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
  // find the cart item in cartItems array
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export type SetISCartOpen = ActionWithPayload<CART_ACTIONS_TYPES.TOGGLE_IS_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTIONS_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpen = withMatcher(
  (bool: boolean): SetISCartOpen => createAction(CART_ACTIONS_TYPES.TOGGLE_IS_CART_OPEN, bool)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
};
