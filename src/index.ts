import { XMLHttpRequest } from 'xmlhttprequest-ts'
import { Method, KeyValue, RequestParameter } from './types'
import { SetPathVariables, SetQueryParams } from './utilities'

const Request = async (
  method: Method,
  url: string, // "/route/:pathId/../:pathId"
  headers: KeyValue[],
  pathVariables: KeyValue,
  queryParams: KeyValue,
  body: any,
  timeout: number
): Promise<any> => {
  // setting the path variables
  url = pathVariables ? SetPathVariables(url, pathVariables) : url

  // setting the query params
  if (queryParams) url = `${url}?${SetQueryParams(queryParams)}`

  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)

    //set request headers
    headers.forEach(header => {
      const key = Object.keys(header)[0]
      xhr.setRequestHeader(key, header[key])
    })

    //set request timeout
    if (timeout != 0) xhr.timeout = timeout

    xhr.onload = function () {
      const response = JSON.parse(this.responseText)
      resolve({
        status: true,
        response: response
      })
    }
    xhr.onerror = function () {
      reject({
        status: false,
        statusCode: this.status
      })
    }
    xhr.send(body)
  })
}

export const Get = async (params: RequestParameter): Promise<any> => {
  return Request(
    Method.Get,
    params.url,
    params.headers ? params.headers : [],
    params.pathVariables ? params.pathVariables : {},
    params.queryParams ? params.queryParams : {},
    params.body ? params.body : null,
    params.timeout ? params.timeout : 0
  )
}

export const Post = async (params: RequestParameter): Promise<any> => {
  return Request(
    Method.Post,
    params.url,
    params.headers ? params.headers : [],
    params.pathVariables ? params.pathVariables : {},
    params.queryParams ? params.queryParams : {},
    params.body ? params.body : null,
    params.timeout ? params.timeout : 0
  )
}

export const Put = async (params: RequestParameter): Promise<any> => {
  return Request(
    Method.Put,
    params.url,
    params.headers ? params.headers : [],
    params.pathVariables ? params.pathVariables : {},
    params.queryParams ? params.queryParams : {},
    params.body ? params.body : null,
    params.timeout ? params.timeout : 0
  )
}

export const Patch = async (params: RequestParameter): Promise<any> => {
  return Request(
    Method.Patch,
    params.url,
    params.headers ? params.headers : [],
    params.pathVariables ? params.pathVariables : {},
    params.queryParams ? params.queryParams : {},
    params.body ? params.body : null,
    params.timeout ? params.timeout : 0
  )
}

export const Delete = async (params: RequestParameter): Promise<any> => {
  return Request(
    Method.Delete,
    params.url,
    params.headers ? params.headers : [],
    params.pathVariables ? params.pathVariables : {},
    params.queryParams ? params.queryParams : {},
    params.body ? params.body : null,
    params.timeout ? params.timeout : 0
  )
}
