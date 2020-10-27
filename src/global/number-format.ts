/**
 * Number formatting functions
 * @module global/number-format
 *
 * @version 1.0
 * @author SemteulGaram
 */

/**
 * Number format to x,xxx,xxx
 * (origin: https://stackoverflow.com/a/3753507/8274779)
 *
 * @public
 * @param num
 * @param separator
 */
export function numberWithCommas (num: number, separator: string = ','): string {
  const numString = '' + num
  const x = numString.split('.');
  let x1 = x[0];
  const x2 = x.length > 1 ? '.' + x[1] : '';
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + separator + '$2');
  }
  return x1 + x2;
}
