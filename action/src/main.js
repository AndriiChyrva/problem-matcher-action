const core = require('@actions/core')
const command = require('@actions/core/lib/command')
const path = require('path')

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    console.log('Bankai!!!')

    // core.debug	             debug
    // core.notice	           notice
    // core.warning	           warning
    // core.error	             error
    // core.startGroup	       group
    // core.endGroup	         endgroup
    // core.setCommandEcho	   echo
    // core.setSecret	         add-mask

    // console.log('Debug')
    command.issueCommand(
      'debug',
      { message: 'Some Debug message here' },
      'Some Debug message here'
    )

    // console.log('Notice')
    command.issueCommand(
      'notice',
      { message: 'Some Notice message here' },
      'Some Notice message here'
    )

    // console.log('Warning')
    command.issueCommand(
      'warning',
      { message: 'Some Warning message here' },
      'Some Warning message here'
    )

    // console.log('Error')
    command.issueCommand(
      'error',
      { message: 'Some Error message here' },
      'Some Error message here'
    )

    // console.log('Echo')
    command.issueCommand('echo', { enabled: true }, 'on')
    command.issueCommand('echo', { enabled: false }, 'off')

    command.issueCommand(
      'setCommandEcho',
      { enabled: true },
      'Some Echo message here'
    )
    command.issueCommand(
      'setCommandEcho',
      { enabled: false },
      'Some Echo message here'
    )

    // console.log('Group')
    command.issueCommand(
      'group',
      { name: 'Some Group name here' },
      'Some Group name here'
    )
    console.log('Inside the Group')

    // console.log('Endgroup')
    command.issueCommand(
      'endgroup',
      { name: 'Some Endgroup name' },
      'Some EndGroup name here'
    )

    // console.log('add-mask')
    command.issueCommand(
      'add-mask',
      { secret: 'Some Secret is here' },
      'Some Secret is here'
    )

    // console.log('set-output')
    command.issueCommand(
      'setOutput',
      { name: 'name', value: 'value' },
      'setOutput'
    )

    // console.log('Add-Matcher')
    // command.issueCommand(
    //   'add-matcher',
    //   {},
    //   path.join(__dirname, 'problem-matcher.json')
    // )
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}
