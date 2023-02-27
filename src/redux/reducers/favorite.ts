import { ActionType } from "../actionsList";
import { FavoriteProductsAction, FavoriteProductsState } from "../types/favorite";

const initialState: FavoriteProductsState = {
    favorites: [],
};

const favoriteReducer = (state = initialState, action: FavoriteProductsAction): FavoriteProductsState => {
    switch (action.type) {
        case ActionType.AddFavoriteProduct: {
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    action.payload
                ]
            }
        }
        case ActionType.RemoveFavoriteProduct: {
            return {
                ...state,
                favorites: state.favorites.filter((favorite) => favorite.id !== action.payload)
            }
        }
        default:
            return state;
    }
}

export default favoriteReducer;