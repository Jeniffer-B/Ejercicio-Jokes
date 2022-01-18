"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = void 0;
var Score = /** @class */ (function () {
    function Score(score) {
        this.score = score;
    }
    Object.defineProperty(Score.prototype, "score", {
        get: function () {
            return this.score;
        },
        set: function (score) {
            this.score = score;
        },
        enumerable: false,
        configurable: true
    });
    return Score;
}());
exports.Score = Score;
