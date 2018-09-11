'use strict'

const test = require('tape')
const nsolidCommand = require('./nsolid-command')

test('required params', t => {
  t.throws(() => {
    nsolidCommand()
  }, 'options is required')
  t.throws(() => {
    nsolidCommand({})
  }, 'name is required')
  t.throws(() => {
    nsolidCommand({
      name: 'test'
    })
  }, 'callback is required')
  t.throws(() => {
    nsolidCommand({
      name: 'test',
      callback: 1
    })
  }, 'callback is a function')
  t.doesNotThrow(() => {
    nsolidCommand({
      name: 'test',
      callback: () => {}
    })
  })
  t.pass('everything is fine 🔥')
  t.end()
})
