import { SetPathVariables, SetQueryParams } from '../utilities'

test('Set Path Variables', () => {
  expect(SetPathVariables('home/user/:id/:name', { id: 1, name: 'kia ' })).toBe(
    'home/user/1/kia'
  )
})

test('Set Query Params', () => {
  expect(SetQueryParams({ id: 1, name: 'kia ' })).toBe('id=1&name=kia')
})
