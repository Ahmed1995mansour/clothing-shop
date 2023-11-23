import { createContext, useEffect, useState } from 'react';

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
