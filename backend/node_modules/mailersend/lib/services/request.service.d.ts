export declare class RequestService {
    private readonly apiKey;
    private readonly baseUrl;
    constructor(apiKey: string, baseUrl: string);
    protected post<T>(path: string, data: T): Promise<APIResponse>;
    protected get(path: string, queryParams?: any): Promise<APIResponse>;
    protected deleteReq<T>(path: string, data?: T): Promise<APIResponse>;
    protected put(path: string, data: any): Promise<APIResponse>;
    private request;
}
export interface APIResponse {
    headers: any;
    body: any;
    statusCode: number;
}
