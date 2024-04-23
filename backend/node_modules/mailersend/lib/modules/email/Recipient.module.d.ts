import { RequestService, APIResponse } from "../../services/request.service";
import { BlockListRecipients, BlockListType, RecipientsQueryParams } from "../../models";
export declare class RecipientModule extends RequestService {
    constructor(apiKey: string, baseUrl: string);
    list(queryParams?: RecipientsQueryParams): Promise<APIResponse>;
    single(recipientId: string): Promise<APIResponse>;
    delete(recipientId: string): Promise<APIResponse>;
    blockList(queryParams?: RecipientsQueryParams, type?: BlockListType): Promise<APIResponse>;
    blockRecipients(blockRecipients: BlockListRecipients, type?: BlockListType): Promise<APIResponse>;
    delBlockListRecipients(ids: string[], type?: BlockListType): Promise<APIResponse>;
    delAllBlockListRecipients(type?: BlockListType): Promise<APIResponse>;
}
