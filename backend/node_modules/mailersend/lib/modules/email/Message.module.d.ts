import { RequestService, APIResponse } from "../../services/request.service";
import { MessageQueryParams } from "../../models";
export declare class MessageModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    list(queryParams?: MessageQueryParams): Promise<APIResponse>;
    single(messageId: string): Promise<APIResponse>;
}
