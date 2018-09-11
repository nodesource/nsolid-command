'use strict'

const assert = require('assert')
const path = require('path')
const MODULE_NAME = path.basename(__filename).replace(/\.js$/, '')

// -----------------------------------------------------------------------------
// This is a custom command for N|Solid.
//
// To invoke the custom command use:
//    nsolid-cli custom --id <agentID> --name <name>
//
// More information: https://docs.nodesource.com/docs#custom-commands
// -----------------------------------------------------------------------------
module.exports = function nsolidCommand () {
  let options, name, command
  if (arguments.length === 1) {
    options = arguments[0]
    assert(options, 'options is required')
    assert(typeof options === 'object', 'options must be an object')
    assert(options.name, 'name is required')
    assert(options.command, 'command is required')
    name = options.name
    command = options.command
  } else if (arguments.length === 2) {
    name = arguments[0]
    command = arguments[1]
  } else {
    throw new TypeError('wrong number of arguments')
  }

  assert(typeof command === 'function', 'command must be a function')

  let nsolid
  try {
    nsolid = require('nsolid')
    nsolid.on(name, command)
  } catch (e) {
    emitWarning(name, e.message)
  }
}

function emitWarning (name, message) {
  if (process.emitWarning) {
    process.emitWarning(message, `${MODULE_NAME} - ${name}`)
  } else {
    console.error(`${MODULE_NAME} - ${name}: ${message}`)
  }
}
