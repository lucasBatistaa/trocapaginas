import { RequestService, APIResponse } from "../../services/request.service";
import { EmailWebhook, IEmailWebhookUpdate } from "../../models";
export declare class EmailWebhookModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    create(params: EmailWebhook): Promise<APIResponse>;
    list(domainId: string): Promise<APIResponse>;
    single(webhookId: string): Promise<APIResponse>;
    update(webhookId: string, updates: Partial<IEmailWebhookUpdate>): Promise<APIResponse>;
    delete(webhookId: string): Promise<APIResponse>;
}
