import { Method, KeyValue, RequestParameter } from './types'
import { SetPathVariables, SetQueryParams } from './utilities'

const Request = async (
  method: Method,
  url: string, // "/route/:pathId/../:pathId"
  headers: object,
  pathVariables: KeyValue,
  queryParams: KeyValue,
  body: any
) => {
  // setting the path variables
  if (pathVariables) url = SetPathVariables(url, pathVariables)

  // setting the query params
  if (queryParams)
    url = `${url}${queryParams && `?${SetQueryParams(queryParams)}`}`

  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.withCredentials = true

    xhr.open(method, url, true)

    //set request headers
    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key])
    })

    xhr.onload = function () {
      const response = JSON.parse(this.responseText)

      resolve({
        status: true,
        code: this.status,
        response: response
      })
    }
    xhr.onerror = function () {
      reject({
        status: false,
        code: this.status
      })
    }
    xhr.send(body)
  })
}

const Get = async (params: RequestParameter): Promise<any> => {
  return Request(
    Method.Get,
    params.url,
    params.headers ? params.headers : {},
    params.pathVariables ? params.pathVariables : {},
    params.queryParams ? params.queryParams : {},
    params.body ? params.body : null
  )
}

const Post = async (params: RequestParameter): Promise<any> => {
  return Request(
    Method.Post,
    params.url,
    params.headers ? params.headers : {},
    params.pathVariables ? params.pathVariables : {},
    params.queryParams ? params.queryParams : {},
    params.body ? params.body : null
  )
}

const Put = async (params: RequestParameter): Promise<any> => {
  return Request(
    Method.Put,
    params.url,
    params.headers ? params.headers : {},
    params.pathVariables ? params.pathVariables : {},
    params.queryParams ? params.queryParams : {},
    params.body ? params.body : null
  )
}

const Patch = async (params: RequestParameter): Promise<any> => {
  return Request(
    Method.Patch,
    params.url,
    params.headers ? params.headers : {},
    params.pathVariables ? params.pathVariables : {},
    params.queryParams ? params.queryParams : {},
    params.body ? params.body : null
  )
}

const Delete = async (params: RequestParameter): Promise<any> => {
  return Request(
    Method.Delete,
    params.url,
    params.headers ? params.headers : {},
    params.pathVariables ? params.pathVariables : {},
    params.queryParams ? params.queryParams : {},
    params.body ? params.body : null
  )
}

const Fetchomech = {
  Get,
  Post,
  Put,
  Patch,
  Delete
}

export default Fetchomech
