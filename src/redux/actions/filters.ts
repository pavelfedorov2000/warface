import { ActionType } from "../actionsList";

export const resetFilters = () => ({
    type: ActionType.ResetFilters,
});

export const openFilters = () => ({
    type: ActionType.OpenFilters,
});

export const closeFilters = () => ({
    type: ActionType.CloseFilters,
});