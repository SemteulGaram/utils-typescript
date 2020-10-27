/**
 * Text to clipboard
 * @module browser/text-to-clipboard
 *
 * @version 1.0
 * @author SemteulGaram
 */

/**
 * Text to clipboard
 * (without user interaction event, It may result security error)
 *
 * @public
 * @param text
 * @returns Command success or failure
 */
export function textToClipboard (text: string): boolean {
  text = ''+text
  const input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  input.setSelectionRange(0, text.length)
  const result = document.execCommand('copy')
  document.body.removeChild(input)
  return result
}
