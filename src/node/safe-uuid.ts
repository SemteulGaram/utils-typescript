/**
 * Uuid generator using crypto module
 * @module node/safe-uuid
 *
 * @version 1.0
 * @author SemteulGaram
 */
import crypto from 'crypto'

/**
 * Generate random 4 length hex string
 *
 * @private
 */
function _cryptoModuleGenerator (): string {
  return crypto.randomBytes(2).toString('hex').padStart(4, '0')
}

/**
 * Crypto module Short UUID generator (xxxxxxxx)
 *
 * @return {string}
 */
export function safeShortUuid(): string {
  return `${ _cryptoModuleGenerator() }${ _cryptoModuleGenerator() }`
}

/**
 * Crypto module Full UUID v4 generator (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
 *
 * @return {string}
 */
export function safeUuidV4(): string {
  return `${ _cryptoModuleGenerator() }${ _cryptoModuleGenerator() }-${
    _cryptoModuleGenerator() }-${ _cryptoModuleGenerator() }-${
    _cryptoModuleGenerator() }-${ _cryptoModuleGenerator() }${
    _cryptoModuleGenerator() }${ _cryptoModuleGenerator() }`
}
