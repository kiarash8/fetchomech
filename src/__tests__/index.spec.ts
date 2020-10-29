import { Delete, Get, Patch, Post, Put } from '../index'

test('Get Request', () => {
  return Get({
    url: 'https://postman-echo.com/response-headers',
    headers: [{ 'Content-Type': 'application/json' }],
    pathVariables: {},
    queryParams: {
      foo1: 'bar1',
      foo2: 'bar2'
    },
    body: null,
    timeout: 30000
  }).then(data => {
    expect(JSON.stringify(data)).toBe(
      '{"status":true,"response":{"foo1":"bar1","foo2":"bar2"}}'
    )
  })
})

test('Post Request', () => {
  return Post({
    url: 'https://postman-echo.com/post',
    headers: [{ 'Content-Type': 'application/json' }],
    pathVariables: {},
    queryParams: {
      foo1: 'bar1',
      foo2: 'bar2'
    },
    body: JSON.stringify({
      foo1: 'bar1',
      foo2: 'bar2'
    }),
    timeout: 30000
  }).then(data => {
    expect(JSON.stringify(data.response.args)).toBe(
      '{"foo1":"bar1","foo2":"bar2"}'
    )
    expect(JSON.stringify(data.response.data)).toBe(
      '{"foo1":"bar1","foo2":"bar2"}'
    )
  })
})

test('Put Request', () => {
  return Put({
    url: 'https://postman-echo.com/put',
    headers: [{ 'Content-Type': 'application/json' }],
    pathVariables: {},
    queryParams: {
      foo1: 'bar1',
      foo2: 'bar2'
    },
    body: JSON.stringify({
      foo1: 'bar1',
      foo2: 'bar2'
    }),
    timeout: 30000
  }).then(data => {
    expect(JSON.stringify(data.response.args)).toBe(
      '{"foo1":"bar1","foo2":"bar2"}'
    )
    expect(JSON.stringify(data.response.data)).toBe(
      '{"foo1":"bar1","foo2":"bar2"}'
    )
  })
})

test('Patch Request', () => {
  return Patch({
    url: 'https://postman-echo.com/patch',
    headers: [{ 'Content-Type': 'application/json' }],
    pathVariables: {},
    queryParams: {
      foo1: 'bar1',
      foo2: 'bar2'
    },
    body: JSON.stringify({
      foo1: 'bar1',
      foo2: 'bar2'
    }),
    timeout: 30000
  }).then(data => {
    expect(JSON.stringify(data.response.args)).toBe(
      '{"foo1":"bar1","foo2":"bar2"}'
    )
    expect(JSON.stringify(data.response.data)).toBe(
      '{"foo1":"bar1","foo2":"bar2"}'
    )
  })
})

test('Delete Request', () => {
  return Delete({
    url: 'https://postman-echo.com/delete',
    headers: [{ 'Content-Type': 'application/json' }],
    pathVariables: {},
    queryParams: {
      foo1: 'bar1',
      foo2: 'bar2'
    },
    body: JSON.stringify({
      foo1: 'bar1',
      foo2: 'bar2'
    }),
    timeout: 30000
  }).then(data => {
    expect(JSON.stringify(data.response.args)).toBe(
      '{"foo1":"bar1","foo2":"bar2"}'
    )
    expect(JSON.stringify(data.response.data)).toBe(
      '{"foo1":"bar1","foo2":"bar2"}'
    )
  })
})
