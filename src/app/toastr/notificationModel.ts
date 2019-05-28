import { GlobalConfig } from 'ngx-toastr';
export interface Notification {
    message: string;
    notificationType: string;
    title?: string;
}
export interface NotificationConfig {
    maxLength?: number;
    toastr?: Partial<GlobalConfig>;
}
export declare type NotificationOnHidden = (notification?: Notification) => void;
