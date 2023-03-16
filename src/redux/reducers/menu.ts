import { ActionType } from "../actionsList";
import { MenuAction, MenuState } from "../types/menu";

const initialState: MenuState = {
    isBurgerMenuOpen: false,
    isProfileMenuOpen: false
}

const menuReducer = (state = initialState, action: MenuAction): MenuState => {
    switch (action.type) {
        case ActionType.OpenBurgerMenu:
            return {
                ...state,
                isBurgerMenuOpen: true,
            };
        case ActionType.CloseBurgerMenu:
            return {
                ...state,
                isBurgerMenuOpen: false,
            };
        case ActionType.OpenProfileMenu:
            return {
                ...state,
                isProfileMenuOpen: true,
            };
        case ActionType.CloseProfileMenu:
            return {
                ...state,
                isProfileMenuOpen: false,
            };
        default:
            return state;
    }
}

export default menuReducer;