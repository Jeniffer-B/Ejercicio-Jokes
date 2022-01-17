"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acudit = void 0;
var Acudit = /** @class */ (function () {
    function Acudit(joke) {
        this.joke = joke;
    }
    Object.defineProperty(Acudit.prototype, "joke", {
        get: function () {
            return this.joke;
        },
        set: function (joke) {
            this.joke = joke;
        },
        enumerable: false,
        configurable: true
    });
    return Acudit;
}());
exports.Acudit = Acudit;
