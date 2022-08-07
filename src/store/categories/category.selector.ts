import { createSelector } from "reselect";

import { RootState } from "../store";

import { CategoriesState } from "./category.reducer";


const selectCategoriesState = (state: RootState): CategoriesState => state.categories;

export const selectCategoryList = createSelector(
    selectCategoriesState,
    (categoriesState) => categoriesState.categoryList
);

export const selectCategoriesMap = createSelector(
    selectCategoryList,
    (categoryList) => {
        return Object.fromEntries(categoryList.map(({ title, items }) => ([title.toLowerCase(), items])))
    }   
);

export const selectCategoriesIsLoading = createSelector(
    selectCategoriesState,
    (categoriesState) => categoriesState.isLoading
);