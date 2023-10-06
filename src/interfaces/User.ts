import { OnlineStatus } from "../enums/OnlineStatus";

export interface BaseUser {
    name: string;
    status: OnlineStatus;
}