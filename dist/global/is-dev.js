"use strict";
/**
 * Detect NODE_ENV is not production
 * @module global/is-dev
 *
 * @version 1.0
 * @author SemteulGaram
 */
exports.__esModule = true;
exports.isDev = void 0;
/**
 * Detect NODE_ENV is not production
 *
 * @public
 */
function isDev() {
    return !(('' + process.env.NODE_ENV).toLowerCase() === 'production');
}
exports.isDev = isDev;
//# sourceMappingURL=is-dev.js.map