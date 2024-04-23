import { Pagination } from "./Pagination";
export interface EmailVerificationQueryParams extends Pagination {
}
export interface EmailVerificationResultQueryParams extends Pagination {
    result?: EmailVerificationResultType[];
}
export declare class EmailVerification {
    name: string;
    emails: string[];
    constructor(name: string, emails: string[]);
    setName(name: string): EmailVerification;
    setEmails(emails: string[]): EmailVerification;
}
export declare enum EmailVerificationResultType {
    VALID = "valid",
    CATCH_ALL = "catch_all",
    MAILBOX_FULL = "mailbox_full",
    ROLE_BASED = "role_based",
    UNKNOWN = "unknown",
    SYNTAX_ERROR = "syntax_error",
    TYPO = "typo",
    MAILBOX_NOT_FOUND = "mailbox_not_found",
    DISPOSABLE = "disposable",
    MAILBOX_BLOCKED = "mailbox_blocked",
    FAILED = "failed"
}
