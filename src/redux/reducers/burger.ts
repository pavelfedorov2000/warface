import { ActionType } from "../actionsList";
import { BurgerAction, BurgerState } from "../types/burger";

const initialState: BurgerState = {
    isMenuOpen: false,
}

const burgerReducer = (state = initialState, action: BurgerAction): BurgerState => {
    switch (action.type) {
        case ActionType.OpenBurgerMenu:
            return {
                ...state,
                isMenuOpen: true,
            };
        case ActionType.CloseBurgerMenu:
            return {
                ...state,
                isMenuOpen: false,
            };
        default:
            return state;
    }
}

export default burgerReducer;