import { SmsActivityQueryParams } from "../../models";
import { RequestService, APIResponse } from "../../services/request.service";
export declare class SmsActivityModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    list(queryParams?: SmsActivityQueryParams): Promise<APIResponse>;
    single(smsMessageId: string): Promise<APIResponse>;
}
