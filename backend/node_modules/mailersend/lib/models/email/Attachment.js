"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
var Attachment = /** @class */ (function () {
    function Attachment(content, fileName, disposition, id) {
        if (disposition === void 0) { disposition = "attachment"; }
        this.content = content;
        this.filename = fileName;
        this.disposition = disposition;
        this.id = id;
    }
    return Attachment;
}());
exports.Attachment = Attachment;
