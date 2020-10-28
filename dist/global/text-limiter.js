"use strict";
/**
 * Text limiting functions
 * @module global/text-limiter
 *
 * @version 1.0
 * @author SemteulGaram
 */
exports.__esModule = true;
exports.textLineLimiter = exports.textLengthLimiter = void 0;
/**
 * Text limit by length
 *
 * @public
 * @param text
 * @param len - Reverse number is counted from the back (exclude tail length)
 * @param tail
 */
function textLengthLimiter(text, len, tail) {
    if (tail === void 0) { tail = '…'; }
    if (len === 0)
        return '';
    if (len > 0 && text.length > len) {
        return text.substring(0, len - tail.length) + tail;
    }
    else if (len < 0 && (len *= -1), text.length > len) {
        return tail + text.substring(text.length - (len - tail.length), text.length);
    }
    return text;
}
exports.textLengthLimiter = textLengthLimiter;
/**
 * Text limit by line count
 *
 * @public
 * @param text
 * @param count - Reverse number is counted from the back
 * @param tail
 * @param lineEnding - (default: \n)
 */
function textLineLimiter(text, count, tail, lineEnding) {
    if (tail === void 0) { tail = '…'; }
    if (lineEnding === void 0) { lineEnding = '\n'; }
    if (count === 0)
        return text;
    if (count > 0) {
        var index = text.indexOf(lineEnding);
        do {
            if (--count === 0) {
                return text.substring(0, index) + tail;
            }
            index = text.indexOf(lineEnding, index + 1);
        } while (index !== -1);
        return text;
    }
    else {
        count *= -1;
        var index = text.lastIndexOf(lineEnding);
        do {
            if (--count === 0) {
                return tail + text.substring(index + 1, text.length);
            }
            index = text.lastIndexOf(lineEnding, index - 1);
        } while (index !== -1);
        return text;
    }
}
exports.textLineLimiter = textLineLimiter;
/* Slow then above code 10% ~ 50% in jsbench.me
export function textLineLimiter (text: string, count: number, tail: string = '…'): string {
  if (count === 0) return text

  const lines = text.split('\n')

  if (count > 0) {
    if (lines.length > count) {
      lines.splice(count, lines.length - count)
      lines[lines.length-1] += tail
    }
  } else {
    count *= -1
    if (lines.length > count) {
      lines.splice(0, lines.length - count)
      lines[0] = tail + lines[0]
    }
  }

  return lines.join('\n')
}
*/
//# sourceMappingURL=text-limiter.js.map