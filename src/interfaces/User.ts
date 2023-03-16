import { OnlineStatusType } from "../enums/OnlineStatus";

export interface BaseUser {
    name: string;
    status: OnlineStatusType;
}