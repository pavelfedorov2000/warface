import { ActionType } from "../actionsList";

export const openBurgerMenu = () => ({
    type: ActionType.OpenBurgerMenu
});

export const closeBurgerMenu = () => ({
    type: ActionType.CloseBurgerMenu
});

export const openProfileMenu = () => ({
    type: ActionType.OpenProfileMenu
});

export const closeProfileMenu = () => ({
    type: ActionType.CloseProfileMenu
});