import { SmsNumberQueryParams } from "../../models";
import { RequestService, APIResponse } from "../../services/request.service";
export declare class SmsNumberModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    list(queryParams?: SmsNumberQueryParams): Promise<APIResponse>;
    single(smsNumberId: string): Promise<APIResponse>;
    update(smsNumberId: string, paused: boolean): Promise<APIResponse>;
    delete(smsNumberId: string): Promise<APIResponse>;
}
