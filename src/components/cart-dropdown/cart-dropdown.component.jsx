import {CartDropdownContainer, DropdownCartItems, EmptyMessage} from './cart-dropdown.styles.jsx';


import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context'



const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('checkout')
    }

    return (
        <CartDropdownContainer>
            <DropdownCartItems>

                {
                    cartItems.length ? (cartItems.map((item) => {
                        return (<CartItem key={item.id} cartItem={item} />)
                    })) : <EmptyMessage>Your cart is empty.</EmptyMessage>
                
                }

            </DropdownCartItems>

                <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;