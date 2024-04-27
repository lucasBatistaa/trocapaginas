import { SmsRecipientQueryParams } from "../../models";
import { RequestService, APIResponse } from "../../services/request.service";
export declare class SmsRecipientModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    list(queryParams?: SmsRecipientQueryParams): Promise<APIResponse>;
    single(smsRecipientId: string): Promise<APIResponse>;
    update(smsRecipientId: string, status: "active" | "opt_out"): Promise<APIResponse>;
}
