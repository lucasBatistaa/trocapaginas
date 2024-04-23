import { RequestService, APIResponse } from "../services/request.service";
export declare class OthersModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    getApiQuota(): Promise<APIResponse>;
}
