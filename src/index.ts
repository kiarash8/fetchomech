import { Method, KeyValue, RequestParameter } from './types'
import { SetPathVariables, SetQueryParams } from './utilities'
import fetch from 'cross-fetch'

const Request = async (
  method: Method,
  url: string, // "/route/:pathId/../:pathId"
  headers: object,
  pathVariables: KeyValue,
  queryParams: KeyValue,
  body: any
) => {
  try {
    // setting the path variables
    url = pathVariables ? SetPathVariables(url, pathVariables) : url

    // setting the query params
    if (queryParams) url = `${url}?${SetQueryParams(queryParams)}`

    var requestOptions = {
      method: method
    }

    // //set request headers
    if (headers) requestOptions['headers'] = headers

    // //set request body
    if (body) requestOptions['body'] = body

    const res = await fetch(url, requestOptions)

    if (res.status >= 400) {
      throw new Error('Bad response from server')
    }
    const result = await res.json()
    return result
  } catch (err) {
    throw new Error(err)
  }
}

export const Get = async (params: RequestParameter): Promise<any> => {
  return Request(
    Method.Get,
    params.url,
    params.headers ? params.headers : {},
    params.pathVariables ? params.pathVariables : {},
    params.queryParams ? params.queryParams : {},
    params.body ? params.body : null
  )
}

export const Post = async (params: RequestParameter): Promise<any> => {
  return Request(
    Method.Post,
    params.url,
    params.headers ? params.headers : {},
    params.pathVariables ? params.pathVariables : {},
    params.queryParams ? params.queryParams : {},
    params.body ? params.body : null
  )
}

export const Put = async (params: RequestParameter): Promise<any> => {
  return Request(
    Method.Put,
    params.url,
    params.headers ? params.headers : {},
    params.pathVariables ? params.pathVariables : {},
    params.queryParams ? params.queryParams : {},
    params.body ? params.body : null
  )
}

export const Patch = async (params: RequestParameter): Promise<any> => {
  return Request(
    Method.Patch,
    params.url,
    params.headers ? params.headers : {},
    params.pathVariables ? params.pathVariables : {},
    params.queryParams ? params.queryParams : {},
    params.body ? params.body : null
  )
}

export const Delete = async (params: RequestParameter): Promise<any> => {
  return Request(
    Method.Delete,
    params.url,
    params.headers ? params.headers : {},
    params.pathVariables ? params.pathVariables : {},
    params.queryParams ? params.queryParams : {},
    params.body ? params.body : null
  )
}
