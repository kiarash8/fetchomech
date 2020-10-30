export const enum Method {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE'
}

export interface KeyValue {
  [name: string]: any
}

export interface RequestParameter {
  url: string // "/route/:pathId/../:pathId"
  headers?: object
  pathVariables?: KeyValue
  queryParams?: KeyValue
  body?: any
}
