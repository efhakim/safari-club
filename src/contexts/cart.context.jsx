import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, product) => {


    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === product.id
    );

    if(existingCartItem) {
        return cartItems.map((cartItem) =>

            cartItem.id === product.id ? 
                {...cartItem, quantity: cartItem.quantity + 1} 
                : cartItem

        )
    }

    return [...cartItems, {...product, quantity: 1}]
}

const removeCartItem = (cartItems, product) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === product.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== existingCartItem.id)
    } else {
        
        return cartItems.map((cartItem) => 
             cartItem.id === product.id ?
                 {...cartItem, quantity: cartItem.quantity - 1}
                 : cartItem
        )
         
    }

}

const deleteCartItem = (cartItems, product) => {
    return cartItems.filter(item => item.id !== product.id)
}



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    deleteItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {

        setCartCount(cartItems.reduce((acc, current) => acc + current.quantity, 0))

        }, [cartItems])

    useEffect(() => {

        setCartTotal(cartItems.reduce((acc, current) => acc + (current.price*current.quantity), 0))
    }, [cartItems])
    
    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product))
    }

    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems, product))
    }

    const deleteItemFromCart = (product) => {
        setCartItems(deleteCartItem(cartItems, product))
    }
    
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, cartTotal, deleteItemFromCart};


    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}