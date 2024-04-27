import { SmsInbound, SmsInboundQueryParams, SmsInboundUpdate } from "../../models";
import { RequestService, APIResponse } from "../../services/request.service";
export declare class SmsInboundModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    create(smsInbound: SmsInbound): Promise<APIResponse>;
    list(queryParams?: SmsInboundQueryParams): Promise<APIResponse>;
    single(smsInboundId: string): Promise<APIResponse>;
    delete(smsInboundId: string): Promise<APIResponse>;
    update(smsInboundId: string, data: SmsInboundUpdate): Promise<APIResponse>;
}
