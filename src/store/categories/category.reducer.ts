import { AnyAction } from "redux";
import { Category } from "./category.types";

import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action";

export type CategoriesState = {
    readonly categoryList: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
    categoryList: [],
    isLoading: false,
    error: null
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action: AnyAction): CategoriesState => {    
    if (fetchCategoriesStart.match(action)) {
        return { ...state, isLoading: true };
    }

    if (fetchCategoriesSuccess.match(action)) {
        return {
            ...state,
            isLoading: false,
            categoryList: action.payload
        };
    }

    if (fetchCategoriesFailed.match(action)) {
        return {
            ...state,
            isLoading: false,
            error: action.payload
        };
    }

    return state;
};