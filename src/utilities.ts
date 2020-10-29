import { KeyValue } from './types'

export const SetPathVariables = (url: string, variables: KeyValue): string => {
  Object.keys(variables).forEach((key: string) => {
    url = url.replace(
      new RegExp(`:${key}(\/|$)`, 'g'),
      `${variables[key].toString().trim()}$1`
    )
  })
  return url
}

export const SetQueryParams = (prams: KeyValue): string =>
  Object.keys(prams)
    .map(key => `${key}=${prams[key].toString().trim()}`)
    .join('&')
