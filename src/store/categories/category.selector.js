import { createSelector } from "reselect";

const selectCategoriesState = (state) => state.categories;

export const selectCategoryList = createSelector(
    selectCategoriesState,
    (categoriesState) => categoriesState.categoryList
)

export const selectCategoriesMap = createSelector(
    selectCategoryList,
    (categoryList) => {
        return Object.fromEntries(categoryList.map(({ title, items }) => ([title.toLowerCase(), items])))
    }   
);