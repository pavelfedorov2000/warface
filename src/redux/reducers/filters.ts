import { ACCOUNTS } from "../../constants/accounts";
import { OnlineStatus } from "../../enums/OnlineStatus";
import { Server } from "../../enums/Server";
import { ActionType } from "../actionsList";
import { FiltersAction, FiltersState } from "../types/filters";

const initialState: FiltersState = {
    isVisible: false,
    price: [895, 15895],
    server: Server.Bravo,
    runk: [5, 99],
    donate: [50, 10000],
    sellerStatus: OnlineStatus.Online,
    items: ACCOUNTS,
};

const filtersReducer = (state = initialState, action: FiltersAction): FiltersState => {
    switch (action.type) {
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
        case ActionType.SetFilterPrice: {
            return {
                ...state,
                price: action.payload
            }
        }
        case ActionType.SetFilterRunk: {
            return {
                ...state,
                runk: action.payload
            }
        }
        case ActionType.SetFilterDonate: {
            return {
                ...state,
                donate: action.payload
            }
        }
        case ActionType.SetFilterServer: {
            return {
                ...state,
                server: action.payload
            }
        }
        case ActionType.SetSellerStatus: {
            return {
                ...state,
                sellerStatus: action.payload
            }
        }
        case ActionType.SubmitFilters: {
            return {
                ...state,
                isVisible: false,
                items: ACCOUNTS.filter((item) => {
                    return item.list.items[0].value === state.server
                        && (+item.list.items[1].value >= state.donate[0] && +item.list.items[1].value <= state.donate[1])
                        && (+item.list.items[2].value >= state.runk[0] && +item.list.items[2].value <= state.runk[1])
                        && item.user.status === state.sellerStatus
                }),
            }
        }
        case ActionType.ResetFilters: {
            return initialState;
        }
        default:
            return state;
    }
}

export default filtersReducer;