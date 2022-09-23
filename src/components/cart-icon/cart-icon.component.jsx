import { CartIconContainer, ShoppingIconElement, ItemCountContainer } from './cart-icon.styles.jsx'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)


    const cartClick = () => {
        setIsCartOpen(!isCartOpen); 
    }


    return (
        <CartIconContainer onClick={cartClick}>
            <ShoppingIconElement />
            <ItemCountContainer>{cartCount}</ItemCountContainer>
        </CartIconContainer>
    )

}

export default CartIcon;