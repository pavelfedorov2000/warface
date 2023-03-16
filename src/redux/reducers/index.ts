import menuReducer from './menu';
import filtersReducer from './filters';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    menuReducer,
    filtersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;