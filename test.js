'use strict'

const test = require('tape')
const nsolidCommand = require('./nsolid-command')

test('options object arguments', t => {
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
  }, 'command is required')
  t.throws(() => {
    nsolidCommand({
      name: 'test',
      command: 1
    })
  }, 'command is a function')
  t.doesNotThrow(() => {
    nsolidCommand({
      name: 'test',
      command: () => {}
    })
  })
  t.pass('everything is fine 🔥')
  t.end()
})

test('simple arguments', t => {
  t.throws(() => {
    nsolidCommand('test')
  }, 'command is missing')
  t.throws(() => {
    nsolidCommand('test', 1)
  }, 'command is not a function')
  t.doesNotThrow(() => {
    nsolidCommand('test', () => {})
  })
  t.pass('everything is fine 🔥')
  t.end()
})
