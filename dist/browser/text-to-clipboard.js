"use strict";
/**
 * Text to clipboard
 * @module browser/text-to-clipboard
 *
 * @version 1.0
 * @author SemteulGaram
 */
exports.__esModule = true;
exports.textToClipboard = void 0;
/**
 * Text to clipboard
 * (without user interaction event, It may result security error)
 *
 * @public
 * @param text
 * @returns Command success or failure
 */
function textToClipboard(text) {
    text = '' + text;
    var input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, text.length);
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
}
exports.textToClipboard = textToClipboard;
//# sourceMappingURL=text-to-clipboard.js.map