import { RequestService, APIResponse } from "../../services/request.service";
import { TemplateQueryParams } from "../../models";
export declare class TemplateModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    list(queryParams?: TemplateQueryParams): Promise<APIResponse>;
    single(templateId: string): Promise<APIResponse>;
    delete(templateId: string): Promise<APIResponse>;
}
