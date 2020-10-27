"use strict";
/**
 * Extract only human-readable text from HTML
 * @module global/html-extract-text
 *
 * @version 1.0
 * @author SemteulGaram
 */
exports.__esModule = true;
exports.htmlToText = void 0;
/**
 * @private
 */
var _HtmlEntities = [
    [/&nbsp;/g, ' '],
    [/&lt;/g, '<'],
    [/&gt;/g, '>'],
    [/&quot;/g, '"'],
    [/&apos;/g, "'"]
];
/**
 * Extract only human-readable text from HTML
 *
 * @public
 * @param html - HTML text to convert
 */
function htmlToText(html) {
    return _HtmlEntities.reduce(function (pv, cv, i, a) {
        return pv.replace(cv[0], cv[1]);
    }, html.replace(/(<.+?>)/g, ''));
}
exports.htmlToText = htmlToText;
//# sourceMappingURL=html-extract-text.js.map