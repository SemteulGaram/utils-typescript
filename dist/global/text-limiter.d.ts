/**
 * Text limiting functions
 * @module global/text-limiter
 *
 * @version 1.0
 * @author SemteulGaram
 */
/**
 * Text limit by length
 *
 * @public
 * @param text
 * @param len - Reverse number is counted from the back (exclude tail length)
 * @param tail
 */
export declare function textLengthLimiter(text: string, len: number, tail?: string): string;
/**
 * Text limit by line count
 *
 * @public
 * @param text
 * @param count - Reverse number is counted from the back
 * @param tail
 * @param lineEnding - (default: \n)
 */
export declare function textLineLimiter(text: string, count: number, tail?: string, lineEnding?: string): string;
