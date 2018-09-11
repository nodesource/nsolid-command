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
module.exports = function nsolidCommand (options) {
  assert(options, 'options is required')
  assert(options.name, 'name is required')
  assert(options.callback, 'callback is required')
  assert(typeof options.callback === 'function', 'callback needs to be a function')

  const { name, callback } = options

  let nsolid
  try {
    nsolid = require('nsolid')
    nsolid.on(name, callback)
  } catch (e) {
    emitWarning(e.message)
  }
}

function emitWarning (name, message) {
  if (process.emitWarning) {
    process.emitWarning(message, `${MODULE_NAME} - ${name}`)
  } else {
    console.error(`${MODULE_NAME} - ${name}: - ${message}`)
  }
}
