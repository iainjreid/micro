"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const micro_base_1 = require("@emphori/micro-base");
function map(fn, target) {
    const out = [];
    for (let i = 0, n = target.length; i < n; i++) {
        out[i] = fn(target[i], i);
    }
    return out;
}
exports.default = micro_base_1.default(map);
