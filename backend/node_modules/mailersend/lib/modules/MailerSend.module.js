"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerSend = void 0;
var Email_module_1 = require("./Email.module");
var Token_module_1 = require("./Token.module");
var EmailVerification_module_1 = require("./EmailVerification.module");
var SMS_module_1 = require("./SMS.module");
var Others_module_1 = require("./Others.module");
var MailerSend = /** @class */ (function () {
    function MailerSend(config) {
        this.baseUrl = "https://api.mailersend.com/v1";
        this.apiKey = config.apiKey;
        this.token = new Token_module_1.TokenModule(config.apiKey, this.baseUrl);
        this.email = new Email_module_1.EmailModule(config.apiKey, this.baseUrl);
        this.emailVerification = new EmailVerification_module_1.EmailVerificationModule(config.apiKey, this.baseUrl);
        this.sms = new SMS_module_1.SMSModule(config.apiKey, this.baseUrl);
        this.others = new Others_module_1.OthersModule(config.apiKey, this.baseUrl);
    }
    return MailerSend;
}());
exports.MailerSend = MailerSend;
