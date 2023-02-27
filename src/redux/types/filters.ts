import { ActionType } from "../actionsList";

export interface FiltersState {
    isVisible: boolean,
}

interface ResetFiltersAction {
    type: ActionType.ResetFilters;
}

interface OpenFiltersAction {
    type: ActionType.OpenFilters
}

interface CloseFiltersAction {
    type: ActionType.CloseFilters
}

export type FiltersAction =
    ResetFiltersAction
    | OpenFiltersAction
    | CloseFiltersAction;