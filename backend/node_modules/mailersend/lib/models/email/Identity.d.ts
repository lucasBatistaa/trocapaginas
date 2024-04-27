import { Pagination } from "../Pagination";
export declare class Identity {
    domain_id: string;
    email: string;
    name: string;
    personal_note?: string;
    reply_to_name?: string;
    reply_to_email?: string;
    add_note?: boolean;
    constructor(domainId: string, email: string, name: string, personalNote?: string, replyToName?: string, replyToEmail?: string, addNote?: boolean);
    setDomainId(domainId: string): Identity;
    setEmail(email: string): Identity;
    setName(name: string): Identity;
    setPersonalNote(personalNote: string): Identity;
    setReplyToName(replyToName: string): Identity;
    setReplyToEmail(replyToEmail: string): Identity;
    setAddNote(addNote: boolean): Identity;
}
export interface IdentityQueryParams extends Pagination {
    domain_id?: string;
}
export interface IdentityUpdate {
    domain_id?: string;
    email?: string;
    name?: string;
    personal_note?: string;
    reply_to_name?: string;
    reply_to_email?: string;
    add_note?: boolean;
}
