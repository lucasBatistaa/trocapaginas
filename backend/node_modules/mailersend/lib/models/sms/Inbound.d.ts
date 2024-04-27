import { Pagination } from "../Pagination";
export interface SmsInboundQueryParams extends Pagination {
    sms_number_id?: string;
    enabled?: boolean;
}
export declare class SmsInbound {
    name: string;
    enabled?: boolean;
    sms_number_id?: string;
    forward_url: string;
    filter?: SmsInboundFilter;
    constructor(name: string, smsNumberId: string, forwardUrl: string, enabled?: boolean, filter?: SmsInboundFilter);
    setSmsNumberId(smsNumberId: string): SmsInbound;
    setName(name: string): SmsInbound;
    setEnabled(enabled: boolean): SmsInbound;
    setForwardUrl(forward_url: string): SmsInbound;
    setFilter(filter: SmsInboundFilter): SmsInbound;
}
export declare enum SmsComparerType {
    EQUAL = "equal",
    NOT_EQUQL = "not-equal",
    CONTAINS = "contains",
    NOT_CONTAINS = "not-contains",
    STARTS_WITH = "starts-with",
    ENDS_WITH = "ends-with",
    NOT_STARTS_WITH = "not-starts-with",
    NOT_ENDS_WITH = "not-ends-with"
}
export interface SmsInboundFilter {
    comparer: SmsComparerType;
    value: string;
}
export interface SmsInboundUpdate {
    name?: string;
    enabled?: boolean;
    sms_number_id?: string;
    forward_url?: string;
    filter?: SmsInboundFilter;
}
