/**
 * Uuid generator using Math.random
 * @module global/uuid
 *
 * @version 1.0
 * @author SemteulGaram
 */

/**
 * Generate random 4 length hex string
 *
 * @private
 */
function _generator (): string {
  return (Math.floor(Math.random()*0xFFFF)).toString(16).padStart(4, '0')
}

/**
 * Short UUID generator (xxxxxxxx)
 *
 * @public
 */
export function shortUuid(): string {
  return `${ _generator() }${ _generator() }`
}

/**
 * Full UUID v4 generator (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
 *
 * @public
 */
export function uuidV4(): string {
  return `${ _generator() }${ _generator() }-${
    _generator() }-${ _generator() }-${
    _generator() }-${ _generator() }${
    _generator() }${ _generator() }`
}
