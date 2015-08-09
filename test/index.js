/**
 * Imports
 */
var test = require('tape')
var actions = require('..')

/**
 * Tests
 */
test('should work', function (t) {
  var update = actions({test: function () { return 1 }})

  t.equal(update(), undefined)
  t.equal(update({}, 'test'), 1)
  t.end()
})

test('should throw error if handler is not a function', function (t) {
  var update = actions({test: 'test'})

  t.throws(function () { update({}, 'test') })
  t.end()
})
