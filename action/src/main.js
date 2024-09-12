const core = require('@actions/core')
const command = require('@actions/core/lib/command')
const path = require('path')

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    console.log('Add-Matcher')
    command.issueCommand(
      'add-matcher',
      {},
      path.join(__dirname, 'problem-matcher.json')
    )
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}
