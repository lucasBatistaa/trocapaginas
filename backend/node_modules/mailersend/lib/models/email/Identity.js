"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identity = void 0;
var Identity = /** @class */ (function () {
    function Identity(domainId, email, name, personalNote, replyToName, replyToEmail, addNote) {
        this.domain_id = domainId;
        this.email = email;
        this.name = name;
        this.personal_note = personalNote;
        this.reply_to_name = replyToName;
        this.reply_to_email = replyToEmail;
        this.add_note = addNote;
    }
    Identity.prototype.setDomainId = function (domainId) {
        this.domain_id = domainId;
        return this;
    };
    Identity.prototype.setEmail = function (email) {
        this.email = email;
        return this;
    };
    Identity.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Identity.prototype.setPersonalNote = function (personalNote) {
        this.personal_note = personalNote;
        return this;
    };
    Identity.prototype.setReplyToName = function (replyToName) {
        this.reply_to_name = replyToName;
        return this;
    };
    Identity.prototype.setReplyToEmail = function (replyToEmail) {
        this.reply_to_email = replyToEmail;
        return this;
    };
    Identity.prototype.setAddNote = function (addNote) {
        this.add_note = addNote;
        return this;
    };
    return Identity;
}());
exports.Identity = Identity;
