import { ActionType } from "../actionsList";
import { FiltersAction, FiltersState } from "../types/filters";

const initialState: FiltersState = {
    isVisible: false,
};

const filtersReducer = (state = initialState, action: FiltersAction): FiltersState => {
    switch (action.type) {
        case ActionType.ResetFilters: {
            return initialState;
        }
        case ActionType.OpenFilters: {
            return {
                ...state,
                isVisible: true
            }
        }
        case ActionType.CloseFilters: {
            return {
                ...state,
                isVisible: false
            }
        }
        default:
            return state;
    }
}

export default filtersReducer;