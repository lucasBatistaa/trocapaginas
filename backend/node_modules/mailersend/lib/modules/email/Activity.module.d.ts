import { ActivityQueryParams } from "../../models";
import { RequestService, APIResponse } from "../../services/request.service";
export declare class ActivityModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    domain(domainId: string, queryParams?: ActivityQueryParams): Promise<APIResponse>;
}
