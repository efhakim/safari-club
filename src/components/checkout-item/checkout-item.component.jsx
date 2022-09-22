import './checkout-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckOutItem = ({item}) => {
    const {name, imageUrl, quantity, price} = item
    const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext)

    const addProductToCart = () => {
        addItemToCart(item)
    }

    const removeProduct = () => {
        removeItemFromCart(item)
    }

    const deleteProduct = () => {
        deleteItemFromCart(item)
    }

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} className="img" />
            </div>

            <span className="name">
                {name}
            </span>

            <div className="quantity">
                <span className="arrow" onClick={removeProduct}>&#10094;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={addProductToCart}>&#10095;</span>
            </div>

            <span className="price">
                ${price}
            </span>

            <span className="remove-button" onClick={deleteProduct}>
                &#10005;
            </span>
        </div>
    )
}

export default CheckOutItem;