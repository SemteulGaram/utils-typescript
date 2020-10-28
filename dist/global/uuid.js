"use strict";
/**
 * Uuid generator using Math.random
 * @module global/uuid
 *
 * @version 1.0
 * @author SemteulGaram
 */
exports.__esModule = true;
exports.uuidV4 = exports.shortUuid = void 0;
/**
 * Generate random 4 length hex string
 *
 * @private
 */
function _generator() {
    return (Math.floor(Math.random() * 0xFFFF)).toString(16).padStart(4, '0');
}
/**
 * Short UUID generator (xxxxxxxx)
 *
 * @public
 */
function shortUuid() {
    return "" + _generator() + _generator();
}
exports.shortUuid = shortUuid;
/**
 * Full UUID v4 generator (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
 *
 * @public
 */
function uuidV4() {
    return "" + _generator() + _generator() + "-" + _generator() + "-" + _generator() + "-" + _generator() + "-" + _generator() + _generator() + _generator();
}
exports.uuidV4 = uuidV4;
//# sourceMappingURL=uuid.js.map