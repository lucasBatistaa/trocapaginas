"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsComparerType = exports.SmsInbound = void 0;
var SmsInbound = /** @class */ (function () {
    function SmsInbound(name, smsNumberId, forwardUrl, enabled, filter) {
        this.name = name;
        this.enabled = enabled;
        this.sms_number_id = smsNumberId;
        this.forward_url = forwardUrl;
        this.filter = filter;
    }
    SmsInbound.prototype.setSmsNumberId = function (smsNumberId) {
        this.sms_number_id = smsNumberId;
        return this;
    };
    SmsInbound.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SmsInbound.prototype.setEnabled = function (enabled) {
        this.enabled = enabled;
        return this;
    };
    SmsInbound.prototype.setForwardUrl = function (forward_url) {
        this.forward_url = forward_url;
        return this;
    };
    SmsInbound.prototype.setFilter = function (filter) {
        this.filter = filter;
        return this;
    };
    return SmsInbound;
}());
exports.SmsInbound = SmsInbound;
var SmsComparerType;
(function (SmsComparerType) {
    SmsComparerType["EQUAL"] = "equal";
    SmsComparerType["NOT_EQUQL"] = "not-equal";
    SmsComparerType["CONTAINS"] = "contains";
    SmsComparerType["NOT_CONTAINS"] = "not-contains";
    SmsComparerType["STARTS_WITH"] = "starts-with";
    SmsComparerType["ENDS_WITH"] = "ends-with";
    SmsComparerType["NOT_STARTS_WITH"] = "not-starts-with";
    SmsComparerType["NOT_ENDS_WITH"] = "not-ends-with";
})(SmsComparerType = exports.SmsComparerType || (exports.SmsComparerType = {}));
