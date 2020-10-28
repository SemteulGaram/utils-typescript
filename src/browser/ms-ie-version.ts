/**
 * Microsoft Internet Explorer version detect
 * @module browser/ms-ie-version
 *
 * @version 1.0
 * @author SemteulGaram
 */

/**
 * Microsoft Internet Explorer version detect
 * (origin: https://stackoverflow.com/questions/19999388/check-if-user-is-using-ie)
 *
 * @public
 * @returns 0: Another browser / [Other number]: Internet Explorer version
 */
export function msIeVersion (): number {
  const ua = window.navigator.userAgent
  const msie = ua.indexOf('MSIE ')

  // If Internet Explorer, return version number
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)))
  // If another browser, return 0
  } else {
    return 0
  }
}
