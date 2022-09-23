import {CategoryItemContainer, BackgroundImage, CategoryBodyContainer } from './category-item.styles.jsx'
import { useNavigate } from 'react-router-dom'

const CategoryItem = ({ category }) => {

    const {imageUrl, title} = category

    const navigate = useNavigate()

    const navigateHandler = (title) => {
        navigate('/shop/'+title)
    }

    return (
        <CategoryItemContainer onClick={() => navigateHandler(title)}>
            <BackgroundImage imageUrl={imageUrl} />

            <CategoryBodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </CategoryBodyContainer>
        </CategoryItemContainer>
    )

}

export default CategoryItem