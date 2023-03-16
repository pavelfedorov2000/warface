import { ActionType } from "../actionsList";

export interface MenuState {
    isBurgerMenuOpen: boolean;
    isProfileMenuOpen: boolean;
}

interface OpenBurgerMenuAction {
    type: ActionType.OpenBurgerMenu;
}

interface CloseBurgerMenuAction {
    type: ActionType.CloseBurgerMenu;
}

interface OpenProfileMenuAction {
    type: ActionType.OpenProfileMenu;
}

interface CloseProfileMenuAction {
    type: ActionType.CloseProfileMenu;
}

export type MenuAction = OpenBurgerMenuAction | CloseBurgerMenuAction | OpenProfileMenuAction | CloseProfileMenuAction;