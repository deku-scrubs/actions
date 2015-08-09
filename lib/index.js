/**
 * Create update function from actions object
 */
module.exports = function (actions) {
  return function (state, event) {
    var fn = actions[event]

    if (fn) {
      if (typeof fn !== 'function') {
        throw new Error('Action handlers must be functions')
      }

      return fn.apply(null, arguments)
    }
  }
}
