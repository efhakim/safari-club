import './category.styles.scss'

import { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context'

import ProductCard from '../../components/product-card/product-card.component'
import { Fragment } from 'react';



const Category = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    const { category } = useParams();

    const [products, setProducts] = useState(categoriesMap[category])


    useEffect(() => {

        setProducts(categoriesMap[category])

    }, [category, categoriesMap])

    return (
        <Fragment>
            <h2>{category.toUpperCase()}</h2>
            <div className="category-container">
                {
                    products && products.map((product) => (<ProductCard key={product.id} product={product} />))
                }
            </div>
        </Fragment>
    )

}

export default Category;