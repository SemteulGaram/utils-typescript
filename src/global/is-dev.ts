/**
 * Detect NODE_ENV is not production
 * @module global/is-dev
 *
 * @version 1.0
 * @author SemteulGaram
 */

/**
 * Detect NODE_ENV is not production
 *
 * @public
 */
export function isDev (): boolean {
  return !((''+process.env.NODE_ENV).toLowerCase() === 'production')
}
