import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
    const categoryListMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <Fragment>
            {    
                isLoading ? (<Spinner />) :           
                (
                    Object.keys(categoryListMap).map((title) => {
                    const products = categoryListMap[title];                    

                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    )                    
                    }) 
                )               
            }                   
        </Fragment>
    )
};

export default CategoriesPreview;