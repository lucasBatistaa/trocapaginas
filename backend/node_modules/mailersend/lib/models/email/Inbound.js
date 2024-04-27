"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComparerType = exports.InboundFilterType = exports.Inbound = void 0;
var Inbound = /** @class */ (function () {
    function Inbound(name, domainEnabled, domainId, inboundDomain, inboundAddress, inboundSubdomain, inboundPriority, forwards, matchFilter, catchFilter) {
        this.name = name;
        this.domain_enabled = domainEnabled;
        this.domain_id = domainId;
        this.inbound_domain = inboundDomain;
        this.inbound_address = inboundAddress;
        this.inbound_subdomain = inboundSubdomain;
        this.inbound_priority = inboundPriority;
        this.forwards = forwards;
        this.match_filter = matchFilter;
        this.catch_filter = catchFilter;
    }
    Inbound.prototype.setDomainId = function (domainId) {
        this.domain_id = domainId;
        return this;
    };
    Inbound.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Inbound.prototype.setDomainEnabled = function (domainEnabled) {
        this.domain_enabled = domainEnabled;
        return this;
    };
    Inbound.prototype.setInboundDomain = function (inboundDomain) {
        this.inbound_domain = inboundDomain;
        return this;
    };
    Inbound.prototype.setInboundSubDomain = function (inboundSubdomain) {
        this.inbound_subdomain = inboundSubdomain;
        return this;
    };
    Inbound.prototype.setInboundPriority = function (inboundPriority) {
        this.inbound_priority = inboundPriority;
        return this;
    };
    Inbound.prototype.setInboundAddress = function (inboundAddress) {
        this.inbound_address = inboundAddress;
        return this;
    };
    Inbound.prototype.setForwards = function (forwards) {
        this.forwards = forwards;
        return this;
    };
    Inbound.prototype.setMatchFilter = function (matchFilter) {
        this.match_filter = matchFilter;
        return this;
    };
    Inbound.prototype.setCatchFilter = function (catchFilter) {
        this.catch_filter = catchFilter;
        return this;
    };
    return Inbound;
}());
exports.Inbound = Inbound;
var InboundFilterType;
(function (InboundFilterType) {
    InboundFilterType["CATCH_ALL"] = "catch_all";
    InboundFilterType["CATCH_RECIPIENT"] = "catch_recipient";
    InboundFilterType["MATCH_ALL"] = "match_all";
    InboundFilterType["MATCH_SENDER"] = "match_sender";
    InboundFilterType["MATCH_DOMAIN"] = "match_domain";
    InboundFilterType["MATCH_HEADER"] = "match_header";
})(InboundFilterType = exports.InboundFilterType || (exports.InboundFilterType = {}));
var ComparerType;
(function (ComparerType) {
    ComparerType["EQUAL"] = "equal";
    ComparerType["NOT_EQUQL"] = "not-equal";
    ComparerType["CONTAINS"] = "contains";
    ComparerType["NOT_CONTAINS"] = "not-contains";
    ComparerType["STARTS_WITH"] = "starts-with";
    ComparerType["ENDS_WITH"] = "ends-with";
    ComparerType["NOT_STARTS_WITH"] = "not-starts-with";
    ComparerType["NOT_ENDS_WITH"] = "not-ends-with";
})(ComparerType = exports.ComparerType || (exports.ComparerType = {}));
