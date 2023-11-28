import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ReactComponent as ShopLogo } from '../../assets/shop-logo.svg';
import CartDropdown from '../../components/cart-dropdown/CartDropdown.component';
import CartIcon from '../../components/cart-icon/CartIcon.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { selectCurrentUser } from '../../store/user/user.selector.js';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { LogoContainer, NavLink, NavLinks, NavigationContainer } from './navigation.styles.jsx';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <ShopLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
