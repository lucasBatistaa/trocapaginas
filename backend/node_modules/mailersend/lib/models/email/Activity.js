"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityEventType = void 0;
var ActivityEventType;
(function (ActivityEventType) {
    ActivityEventType["QUEUED"] = "queued";
    ActivityEventType["SENT"] = "sent";
    ActivityEventType["DELIVERED"] = "delivered";
    ActivityEventType["SOFT_BOUNCED"] = "soft_bounced";
    ActivityEventType["HARD_BOUNCED"] = "hard_bounced";
    ActivityEventType["JUNK"] = "junk";
    ActivityEventType["OPENED"] = "opened";
    ActivityEventType["CLICKED"] = "clicked";
    ActivityEventType["UNSUBSCRIBED"] = "unsubscribed";
    ActivityEventType["SPAM_COMPLAINTS"] = "spam_complaints";
})(ActivityEventType = exports.ActivityEventType || (exports.ActivityEventType = {}));
