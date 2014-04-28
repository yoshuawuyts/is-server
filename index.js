/**
 * Export
 */

exports = module.exports = detect;

/**
 * Check if process is running in Node.js
 *
 * @return {Boolean}
 * @api public
 */

function detect() {
  if (typeof process != "undefined") return true;
  return false;
}