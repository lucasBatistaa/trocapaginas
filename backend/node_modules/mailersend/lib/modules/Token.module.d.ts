import { RequestService, APIResponse } from "../services/request.service";
import { Token, TokenUpdates } from "../models";
export declare class TokenModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    create(token: Token): Promise<APIResponse>;
    updateSettings(tokenId: string, updates: TokenUpdates): Promise<APIResponse>;
    delete(tokenId: string): Promise<APIResponse>;
}
