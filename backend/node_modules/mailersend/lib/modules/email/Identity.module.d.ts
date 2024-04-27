import { RequestService, APIResponse } from "../../services/request.service";
import { Identity, IdentityQueryParams, IdentityUpdate } from "../../models";
export declare class IdentityModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    create(identity: Identity): Promise<APIResponse>;
    list(queryParams?: IdentityQueryParams): Promise<APIResponse>;
    single(identityId: string): Promise<APIResponse>;
    singleByEmail(email: string): Promise<APIResponse>;
    update(identityId: string, data: IdentityUpdate): Promise<APIResponse>;
    updateByEMail(email: string, data: IdentityUpdate): Promise<APIResponse>;
    delete(identityId: string): Promise<APIResponse>;
    deleteByEmail(email: string): Promise<APIResponse>;
}
