import { SmsMessageQueryParams } from "../../models";
import { RequestService, APIResponse } from "../../services/request.service";
export declare class SmsMessageModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    list(queryParams?: SmsMessageQueryParams): Promise<APIResponse>;
    single(smsMessageId: string): Promise<APIResponse>;
}
