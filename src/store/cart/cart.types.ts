import { CategoryItem } from '../categories/categories.types';

export enum CART_ACTIONS_TYPES {
  SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
  TOGGLE_IS_CART_OPEN = 'cart/TOGGLE_IS_CART_OPEN',
}

export type CartItem = CategoryItem & {
  quantity: number;
};
