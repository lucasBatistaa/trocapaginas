import { AnalyticsQueryParams } from "../../models";
import { RequestService, APIResponse } from "../../services/request.service";
export declare class AnalyticsModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    byDate(queryParams: AnalyticsQueryParams): Promise<APIResponse>;
    byCountry(queryParams: AnalyticsQueryParams): Promise<APIResponse>;
    byUserAgent(queryParams: AnalyticsQueryParams): Promise<APIResponse>;
    byReadingEnvironment(queryParams: AnalyticsQueryParams): Promise<APIResponse>;
}
