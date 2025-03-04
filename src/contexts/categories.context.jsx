import { createContext, useState, useEffect } from "react";

import { getCollectionAndDocument } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {

        const getCategoriesMap = async () => {
            const categoryMap = await getCollectionAndDocument();
            setCategoriesMap(categoryMap)

        }

        getCategoriesMap()
        
    }, [])

    // useEffect(() => {
    //     addCollectionAndDocument('categories', SHOP_DATA)
    // }, [])

    const value = { categoriesMap };

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}