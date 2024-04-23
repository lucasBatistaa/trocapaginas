import { SmsWebhook, SmsWebhookUpdate } from "../../models";
import { RequestService, APIResponse } from "../../services/request.service";
export declare class SmsWebhookModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    create(params: SmsWebhook): Promise<APIResponse>;
    list(smsNumberId: string): Promise<APIResponse>;
    single(smsWebhookId: string): Promise<APIResponse>;
    update(smsWebhookId: string, data: SmsWebhookUpdate): Promise<APIResponse>;
    delete(smsWebhookId: string): Promise<APIResponse>;
}
