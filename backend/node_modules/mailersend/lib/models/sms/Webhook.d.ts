export declare class SmsWebhook {
    url: string;
    name: string;
    events: SmsWebhookEventType[];
    sms_number_id: string;
    enabled?: boolean;
    constructor(name: string, url: string, events: SmsWebhookEventType[], smsNumberId: string, enabled?: boolean);
    setUrl(url: string): SmsWebhook;
    setName(name: string): SmsWebhook;
    setEvents(events: SmsWebhookEventType[]): SmsWebhook;
    setSmsNumberId(smsNumberId: string): SmsWebhook;
    setEnabled(enabled: boolean): SmsWebhook;
}
export interface SmsWebhookUpdate {
    url?: string;
    name?: string;
    events?: SmsWebhookEventType[];
    enabled?: boolean;
}
export declare enum SmsWebhookEventType {
    SENT = "sms.sent",
    DELIVERED = "sms.delivered",
    FAILED = "sms.failed"
}
