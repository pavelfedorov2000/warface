import { OnlineStatus } from "../../enums/OnlineStatus";
import { ServerType } from "../../enums/Server";
import { ActionType } from "../actionsList";

export const submitFilters = () => ({
    type: ActionType.SubmitFilters,
});

export const resetFilters = () => ({
    type: ActionType.ResetFilters,
});

export const openFilters = () => ({
    type: ActionType.OpenFilters,
});

export const closeFilters = () => ({
    type: ActionType.CloseFilters,
});

export const setFilterPrice = (from: number, to: number) => ({
    type: ActionType.SetFilterPrice,
    payload: [from, to]
});

export const setFilterRunk = (from: number, to: number) => ({
    type: ActionType.SetFilterRunk,
    payload: [from, to]
});

export const setFilterDonate = (from: number, to: number) => ({
    type: ActionType.SetFilterDonate,
    payload: [from, to]
});

export const setFilterServer = (server: ServerType) => ({
    type: ActionType.SetFilterServer,
    payload: server
});

export const setSellerStatus = (status: OnlineStatus) => ({
    type: ActionType.SetSellerStatus,
    payload: status
});