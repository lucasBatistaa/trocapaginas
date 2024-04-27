"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsWebhookEventType = exports.SmsWebhook = void 0;
var SmsWebhook = /** @class */ (function () {
    function SmsWebhook(name, url, events, smsNumberId, enabled) {
        this.url = url;
        this.name = name;
        this.events = events;
        this.sms_number_id = smsNumberId;
        this.enabled = enabled;
    }
    SmsWebhook.prototype.setUrl = function (url) {
        this.url = url;
        return this;
    };
    SmsWebhook.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SmsWebhook.prototype.setEvents = function (events) {
        this.events = events;
        return this;
    };
    SmsWebhook.prototype.setSmsNumberId = function (smsNumberId) {
        this.sms_number_id = smsNumberId;
        return this;
    };
    SmsWebhook.prototype.setEnabled = function (enabled) {
        this.enabled = enabled;
        return this;
    };
    return SmsWebhook;
}());
exports.SmsWebhook = SmsWebhook;
var SmsWebhookEventType;
(function (SmsWebhookEventType) {
    SmsWebhookEventType["SENT"] = "sms.sent";
    SmsWebhookEventType["DELIVERED"] = "sms.delivered";
    SmsWebhookEventType["FAILED"] = "sms.failed";
})(SmsWebhookEventType = exports.SmsWebhookEventType || (exports.SmsWebhookEventType = {}));
