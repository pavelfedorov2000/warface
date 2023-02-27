import * as BurgerActionCreators from './burger';
import * as FiltersActionCreators from './filters';
//import * as FavoriteActionCreators from './favorite';

export default {
    ...BurgerActionCreators,
    ...FiltersActionCreators,
    //...FavoriteActionCreators,
}