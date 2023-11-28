import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTIONS_TYPES } from './cart.types';

export const setCartItems = cartItems => createAction(CART_ACTIONS_TYPES.setCartItems, cartItems);
export const setIsCartOpen = bool => createAction(CART_ACTIONS_TYPES.TOGGLE_IS_CART_OPEN, bool);

const addCartItem = (cartItems, productToAdd) => {
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

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item in cartItems array
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};
