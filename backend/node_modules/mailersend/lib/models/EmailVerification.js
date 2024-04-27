"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailVerificationResultType = exports.EmailVerification = void 0;
var EmailVerification = /** @class */ (function () {
    function EmailVerification(name, emails) {
        this.name = name;
        this.emails = emails;
    }
    EmailVerification.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    EmailVerification.prototype.setEmails = function (emails) {
        this.emails = emails;
        return this;
    };
    return EmailVerification;
}());
exports.EmailVerification = EmailVerification;
var EmailVerificationResultType;
(function (EmailVerificationResultType) {
    EmailVerificationResultType["VALID"] = "valid";
    EmailVerificationResultType["CATCH_ALL"] = "catch_all";
    EmailVerificationResultType["MAILBOX_FULL"] = "mailbox_full";
    EmailVerificationResultType["ROLE_BASED"] = "role_based";
    EmailVerificationResultType["UNKNOWN"] = "unknown";
    EmailVerificationResultType["SYNTAX_ERROR"] = "syntax_error";
    EmailVerificationResultType["TYPO"] = "typo";
    EmailVerificationResultType["MAILBOX_NOT_FOUND"] = "mailbox_not_found";
    EmailVerificationResultType["DISPOSABLE"] = "disposable";
    EmailVerificationResultType["MAILBOX_BLOCKED"] = "mailbox_blocked";
    EmailVerificationResultType["FAILED"] = "failed";
})(EmailVerificationResultType = exports.EmailVerificationResultType || (exports.EmailVerificationResultType = {}));
