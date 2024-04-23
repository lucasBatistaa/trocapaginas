import { Pagination } from "../Pagination";
export interface InboundQueryParams extends Pagination {
    domain_id?: string;
}
export declare class Inbound {
    name: string;
    domain_enabled: boolean;
    domain_id?: string;
    inbound_domain?: string;
    inbound_address?: string;
    inbound_subdomain?: string;
    inbound_priority?: number;
    forwards?: InboundForward[];
    match_filter?: MatchFilter;
    catch_filter?: CatchFilter;
    constructor(name: string, domainEnabled: boolean, domainId?: string, inboundDomain?: string, inboundAddress?: string, inboundSubdomain?: string, inboundPriority?: number, forwards?: InboundForward[], matchFilter?: MatchFilter, catchFilter?: CatchFilter);
    setDomainId(domainId: string): Inbound;
    setName(name: string): Inbound;
    setDomainEnabled(domainEnabled: boolean): Inbound;
    setInboundDomain(inboundDomain: string): Inbound;
    setInboundSubDomain(inboundSubdomain: string): Inbound;
    setInboundPriority(inboundPriority: number): Inbound;
    setInboundAddress(inboundAddress: string): Inbound;
    setForwards(forwards: InboundForward[]): Inbound;
    setMatchFilter(matchFilter: MatchFilter): Inbound;
    setCatchFilter(catchFilter: CatchFilter): Inbound;
}
export interface InboundForward {
    type: 'webhook' | 'email';
    value: string;
}
export declare enum InboundFilterType {
    CATCH_ALL = "catch_all",
    CATCH_RECIPIENT = "catch_recipient",
    MATCH_ALL = "match_all",
    MATCH_SENDER = "match_sender",
    MATCH_DOMAIN = "match_domain",
    MATCH_HEADER = "match_header"
}
export declare enum ComparerType {
    EQUAL = "equal",
    NOT_EQUQL = "not-equal",
    CONTAINS = "contains",
    NOT_CONTAINS = "not-contains",
    STARTS_WITH = "starts-with",
    ENDS_WITH = "ends-with",
    NOT_STARTS_WITH = "not-starts-with",
    NOT_ENDS_WITH = "not-ends-with"
}
export interface InboundFilter {
    comparer: ComparerType;
    value: string;
}
export interface MatchInboundFilter extends InboundFilter {
    key?: string;
}
export interface CatchFilter {
    type: InboundFilterType;
    filters?: InboundFilter[];
}
export interface MatchFilter {
    type: InboundFilterType;
    filters?: MatchInboundFilter[];
}
