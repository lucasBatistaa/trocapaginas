"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerSendUtils = void 0;
var crypto_1 = require("crypto");
var MailerSendUtils = /** @class */ (function () {
    function MailerSendUtils() {
    }
    MailerSendUtils.verifyWebHook = function (rawBody, signature, signingSecret) {
        if (!signature) {
            throw new Error("No signature provided");
        }
        if (!rawBody) {
            throw new Error("No raw body provided");
        }
        if (!signingSecret) {
            throw new Error("No secret provided");
        }
        var rawData = rawBody.toString("utf8");
        var hmacSignature = (0, crypto_1.createHmac)("sha256", signingSecret).update(rawData, "utf8").digest("hex");
        return (0, crypto_1.timingSafeEqual)(Buffer.from(signature), Buffer.from(hmacSignature));
    };
    return MailerSendUtils;
}());
exports.MailerSendUtils = MailerSendUtils;
