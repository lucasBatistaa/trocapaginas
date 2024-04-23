"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenScopeType = exports.Token = void 0;
var Token = /** @class */ (function () {
    function Token(name, domainId, scopes) {
        this.name = name;
        this.domain_id = domainId;
        this.scopes = scopes;
    }
    Token.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Token.prototype.setDomainId = function (domainId) {
        this.domain_id = domainId;
        return this;
    };
    Token.prototype.setScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    return Token;
}());
exports.Token = Token;
var TokenScopeType;
(function (TokenScopeType) {
    TokenScopeType["EMAIL_FULL"] = "email_full";
    TokenScopeType["DOMAINS_FULL"] = "domains_full";
    TokenScopeType["ACTIVITY_READ"] = "activity_read";
    TokenScopeType["ACTIVITY_FULL"] = "activity_full";
    TokenScopeType["ANALYTICS_READ"] = "analytics_read";
    TokenScopeType["ANALYTICS_FULL"] = "analytics_full";
    TokenScopeType["TOKENS_FULL"] = "tokens_full";
    TokenScopeType["WEBHOOKS_FULL"] = "webhooks_full";
    TokenScopeType["TEMPLATES_FULL"] = "templates_full";
    TokenScopeType["SUPPRESSIONS_READ"] = "suppressions_read";
    TokenScopeType["SUPPRESSIONS_FULL"] = "suppressions_full";
    TokenScopeType["SMS_READ"] = "sms_read";
    TokenScopeType["SMS_FULL"] = "sms_full";
    TokenScopeType["EMAIL_VERIFICATION_READ"] = "email_verification_read";
    TokenScopeType["EMAIL_VERIFICATION_FULL"] = "email_verification_full";
    TokenScopeType["INBOUNDS_FULL"] = "inbounds_full";
    TokenScopeType["RECIPIENTS_READ"] = "recipients_read";
    TokenScopeType["RECIPIENTS_FULL"] = "recipients_full";
})(TokenScopeType = exports.TokenScopeType || (exports.TokenScopeType = {}));
