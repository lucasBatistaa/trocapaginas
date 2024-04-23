import { RequestService, APIResponse } from "../services/request.service";
import { EmailVerification, EmailVerificationQueryParams, EmailVerificationResultQueryParams } from "../models";
export declare class EmailVerificationModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    list(queryParams?: EmailVerificationQueryParams): Promise<APIResponse>;
    single(emailVerificationId: string): Promise<APIResponse>;
    create(emailVerification: EmailVerification): Promise<APIResponse>;
    verifyList(emailVerificationId: string): Promise<APIResponse>;
    getListResult(emailVerificationId: string, queryParams: EmailVerificationResultQueryParams): Promise<APIResponse>;
    verifyEmail(email: string): Promise<APIResponse>;
}
