import { RequestService, APIResponse } from "../../services/request.service";
import { ScheduleQueryParams } from "../../models";
export declare class ScheduleModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    list(queryParams?: ScheduleQueryParams): Promise<APIResponse>;
    single(messageId: string): Promise<APIResponse>;
    delete(messageId: string): Promise<APIResponse>;
}
