import { Sender } from "./Sender";
import { Pagination } from "../Pagination";
export declare class Recipient extends Sender {
    constructor(email: string, name?: string);
}
export interface RecipientsQueryParams extends Pagination {
    domain_id?: string;
}
export interface BlockListRecipients {
    domain_id?: string;
    recipients?: string[];
    patterns?: string[];
}
export declare enum BlockListType {
    BLOCK_LIST = "blocklist",
    HARD_BOUNCES_LIST = "hard-bounces",
    SPAM_COMPLAINTS_LIST = "spam-complaints",
    UNSUBSCRIBES_LIST = "unsubscribes"
}
