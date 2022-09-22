import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../contexts/cart.context';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { NavContainer, LogoContainer, LinksContainer, NavLink,} from './nav.styles'

const Nav = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

    return (
      <Fragment>
        <NavContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <LinksContainer>
                <NavLink to="shop">
                    SHOP
                </NavLink>


                {
                  currentUser ? (
                    <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
                  ) : (
                    <NavLink to="auth">
                        SIGN IN
                    </NavLink>
                  )
                }

              <CartIcon />
          </LinksContainer>
              {isCartOpen && <CartDropdown />}
        </NavContainer>
        <Outlet />
      </Fragment>
    )
}

export default Nav;