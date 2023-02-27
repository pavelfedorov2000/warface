import burgerReducer from './burger';
import filtersReducer from './filters';
//import favoriteReducer from './favorite';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    burgerReducer,
    filtersReducer,
    //favoriteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;