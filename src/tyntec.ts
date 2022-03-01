import {AxiosRequestConfig} from 'axios'

export function composeSendSMSRequestAxiosConfig(
  apikey: string,
  data: SmsMessage
): AxiosRequestConfig {
  return {
    method: 'post',
    url: 'https://api.tyntec.com/messaging/v1/sms',
    headers: {
      accept: 'application/json',
      apikey,
      'content-type': 'application/json'
    },
    data
  }
}

export interface SmsMessage {
  to: string
  from: string
  message: string
  encoding?: 'AUTO' | 'GDM7' | 'UNICODE'
  gateway?: string
  conversion?: boolean
  sendDateTime?: string
  validity?: string
  reference?: string
  callbackUrl?: string
  callbackMethod?: 'POST' | 'GET'
  partLimit?: number
  trate?: number
  mrate?: number
  upperCased?: boolean
  keepEmojis?: boolean
  flash?: boolean
}
