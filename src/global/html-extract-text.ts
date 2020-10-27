/**
 * Extract only human-readable text from HTML
 * @module global/html-extract-text
 *
 * @version 1.0
 * @author SemteulGaram
 */

/**
 * @private
 */
const _HtmlEntities: [RegExp, string][] = [
  [/&nbsp;/g, ' '],
  [/&lt;/g, '<'],
  [/&gt;/g, '>'],
  [/&quot;/g, '"'],
  [/&apos;/g, "'"]
]

/**
 * Extract only human-readable text from HTML
 *
 * @public
 * @param html - HTML text to convert
 */
export function htmlToText (html: string): string {
  return _HtmlEntities.reduce<string>((pv: string, cv: [RegExp, string], i: number, a: [RegExp, string][]): string => {
    return pv.replace(cv[0], cv[1])
  }, html.replace(/(<.+?>)/g, ''))
}
