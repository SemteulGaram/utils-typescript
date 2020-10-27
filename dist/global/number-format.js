"use strict";
/**
 * Number formatting functions
 * @module global/number-format
 *
 * @version 1.0
 * @author SemteulGaram
 */
exports.__esModule = true;
exports.numberWithCommas = void 0;
/**
 * Number format to x,xxx,xxx
 * Origin: https://stackoverflow.com/a/3753507/8274779
 *
 * @public
 * @param num - Number to convert
 * @param separator - Seperator (default: ',')
 */
function numberWithCommas(num, separator) {
    if (separator === void 0) { separator = ','; }
    var numString = '' + num;
    var x = numString.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + separator + '$2');
    }
    return x1 + x2;
}
exports.numberWithCommas = numberWithCommas;
//# sourceMappingURL=number-format.js.map