"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSParams = void 0;
var SMSParams = /** @class */ (function () {
    function SMSParams(config) {
        var _a;
        this.from = config === null || config === void 0 ? void 0 : config.from;
        this.to = config === null || config === void 0 ? void 0 : config.to;
        this.text = config === null || config === void 0 ? void 0 : config.text;
        if ((_a = config === null || config === void 0 ? void 0 : config.personalization) === null || _a === void 0 ? void 0 : _a.length) {
            this.personalization = config === null || config === void 0 ? void 0 : config.personalization;
        }
    }
    SMSParams.prototype.setFrom = function (from) {
        this.from = from;
        return this;
    };
    SMSParams.prototype.setTo = function (to) {
        this.to = to;
        return this;
    };
    SMSParams.prototype.setText = function (text) {
        this.text = text;
        return this;
    };
    SMSParams.prototype.setPersonalization = function (personalization) {
        this.personalization = personalization;
        return this;
    };
    return SMSParams;
}());
exports.SMSParams = SMSParams;
