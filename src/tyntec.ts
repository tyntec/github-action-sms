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

export interface RestMessagePart {
  currency?: string
  deliveryState?: string
  doneDate?: string
  errorCode?: string
  partId?: string
  price?: string
  priceEffective?: string
  sentDate?: string
  statusText?: string
}

export interface RestMessageResponse {
  doneDate?: string
  errorCode?: string
  errorReason?: string
  from?: string
  href?: string
  mccmnc?: string
  parts?: RestMessagePart[]
  overallPrice?: string
  priceEffective?: string
  reference?: string
  requestId: string
  sentDate?: string
  size?: number
  status?: string
  submitDate?: string
  to?: string
  ttid?: string
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
