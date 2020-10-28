"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.safeUuidV4 = exports.safeShortUuid = void 0;
/**
 * Uuid generator using crypto module
 * @module node/safe-uuid
 *
 * @version 1.0
 * @author SemteulGaram
 */
var crypto_1 = __importDefault(require("crypto"));
/**
 * Generate random 4 length hex string
 *
 * @private
 */
function _cryptoModuleGenerator() {
    return crypto_1["default"].randomBytes(2).toString('hex').padStart(4, '0');
}
/**
 * Crypto module Short UUID generator (xxxxxxxx)
 *
 * @return {string}
 */
function safeShortUuid() {
    return "" + _cryptoModuleGenerator() + _cryptoModuleGenerator();
}
exports.safeShortUuid = safeShortUuid;
/**
 * Crypto module Full UUID v4 generator (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
 *
 * @return {string}
 */
function safeUuidV4() {
    return "" + _cryptoModuleGenerator() + _cryptoModuleGenerator() + "-" + _cryptoModuleGenerator() + "-" + _cryptoModuleGenerator() + "-" + _cryptoModuleGenerator() + "-" + _cryptoModuleGenerator() + _cryptoModuleGenerator() + _cryptoModuleGenerator();
}
exports.safeUuidV4 = safeUuidV4;
//# sourceMappingURL=safe-uuid.js.map