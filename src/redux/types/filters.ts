import { OnlineStatus } from "../../enums/OnlineStatus";
import { ServerType } from "../../enums/Server";
import { Card } from "../../interfaces/Card";
import { ActionType } from "../actionsList";

export interface FiltersState {
    isVisible: boolean;
    price: [number, number];
    server: ServerType;
    runk: [number, number];
    donate: [number, number];
    sellerStatus: OnlineStatus;
    items: Card[];
}

interface SubmitFiltersAction {
    type: ActionType.SubmitFilters;
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

interface SetFilterPriceAction {
    type: ActionType.SetFilterPrice;
    payload: [number, number];
}

interface SetFilterRunkAction {
    type: ActionType.SetFilterRunk;
    payload: [number, number];
}

interface SetFilterDonateAction {
    type: ActionType.SetFilterDonate;
    payload: [number, number];
}

interface SetFilterServerAction {
    type: ActionType.SetFilterServer;
    payload: ServerType;
}

interface SetSellerStatusAction {
    type: ActionType.SetSellerStatus;
    payload: OnlineStatus;
}

export type FiltersAction =
    SubmitFiltersAction
    | ResetFiltersAction
    | OpenFiltersAction
    | CloseFiltersAction
    | SetFilterPriceAction
    | SetFilterRunkAction
    | SetFilterDonateAction
    | SetFilterServerAction
    | SetSellerStatusAction;