export interface Notification {
    title: string;
    text: string;
}

export interface NotificationNew extends Notification {
    time: string;
}