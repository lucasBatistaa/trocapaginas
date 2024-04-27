import { RequestService, APIResponse } from "../../services/request.service";
import { Domain, DomainQueryParams, DomainRecipientsQueryParams, DomainSettings } from "../../models";
export declare class DomainModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    create(domain: Domain): Promise<APIResponse>;
    list(queryParams?: DomainQueryParams): Promise<APIResponse>;
    single(domainId: string): Promise<APIResponse>;
    delete(domainId: string): Promise<APIResponse>;
    updateSettings(domainId: string, data: DomainSettings): Promise<APIResponse>;
    recipients(domainId: string, queryParams?: DomainRecipientsQueryParams): Promise<APIResponse>;
    dns(domainId: string): Promise<APIResponse>;
    verify(domainId: string): Promise<APIResponse>;
}
