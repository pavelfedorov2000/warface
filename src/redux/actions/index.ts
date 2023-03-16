import * as MenuActionCreators from './menu';
import * as FiltersActionCreators from './filters';

export default {
    ...MenuActionCreators,
    ...FiltersActionCreators,
}