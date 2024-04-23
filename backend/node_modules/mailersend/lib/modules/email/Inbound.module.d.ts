import { RequestService, APIResponse } from "../../services/request.service";
import { Inbound, InboundQueryParams } from "../../models";
export declare class InboundModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    create(inbound: Inbound): Promise<APIResponse>;
    list(queryParams?: InboundQueryParams): Promise<APIResponse>;
    single(inboundId: string): Promise<APIResponse>;
    delete(inboundId: string): Promise<APIResponse>;
    update(inboundId: string, data: Inbound): Promise<APIResponse>;
}
