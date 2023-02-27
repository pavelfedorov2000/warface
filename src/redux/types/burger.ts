import { ActionType } from "../actionsList";

export interface BurgerState {
    isMenuOpen: boolean;
}

interface OpenBurgerMenuAction {
    type: ActionType.OpenBurgerMenu;
}

interface CloseBurgerMenuAction {
    type: ActionType.CloseBurgerMenu;
}

export type BurgerAction = OpenBurgerMenuAction | CloseBurgerMenuAction;