import * as core from '@actions/core'
import {RestMessageResponse, composeSendSMSRequestAxiosConfig} from './tyntec'
import assert from 'assert'
import axios from 'axios'

async function run(): Promise<void> {
  const message = {
    from: core.getInput('fromPhoneNumber', {required: true}),
    to: core.getInput('toPhoneNumber', {required: true}),
    message: core.getInput('message', {required: true})
  }

  const tyntecApikey = process.env.TYNTEC_API_KEY
  if (!tyntecApikey) {
    core.setFailed(
      'Environment variable required and not supplied: TYNTEC_API_KEY'
    )
    return
  }

  const request = composeSendSMSRequestAxiosConfig(tyntecApikey, message)
  let response
  try {
    response = await axios.request<RestMessageResponse>(request)
  } catch (error) {
    assert(axios.isAxiosError(error) && error.response)
    const {status, data} = error.response
    core.debug(`response ${status}: ${JSON.stringify(data)}`)
    core.setFailed(`Failed to send message: ${error}`)
    return
  }

  core.setOutput('requestId', response.data.requestId)
}

run()
