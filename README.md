# Fetchomech

Fetchomech is a Typescript library for HTTP Request Handler.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Fetchomech.

```bash
npm install fetchomech
```

## Usage

```typescript
import Fetchomech from 'fetchomech'

//get example
Fetchomech.Get({
  url: 'https://example.com/user/:id/something/:name',
  headers: { 'Content-Type': 'application/json' },
  pathVariables: {
    id: '8',
    name: 'kia'
  },
  queryParams: {
    foo1: 'bar1',
    foo2: 'bar2'
  },
  body: null
}).then(res => {
  console.log(res)
})

//post example (formData)
var data = new FormData()
data.append('usr', 'kiarash8')
data.append('pwd', '123')
Fetchomech.Post({
  url: 'https://example.com/login',
  headers: {},
  pathVariables: {},
  queryParams: {},
  body: data
}).then(res => {
  console.log(res)
})

//post example (data)
const data = JSON.stringify({
  user: 'kiarash8',
  pwd: '123'
})
Fetchomech.Post({
  url: 'https://postman-echo.com/post',
  headers: { 'Content-Type': 'application/json' },
  pathVariables: {},
  queryParams: {
    foo1: 'bar1',
    foo2: 'bar2'
  },
  body: data
}).then(res => {
  console.log(res)
})

//put example
var data = new FormData()
data.append('firstname', 'kiarash')
data.append('lastname', 'fereiduni')
Fetchomech.Put({
  url: 'https://example.com/user/:id',
  headers: {},
  pathVariables: {
    id: '8'
  },
  queryParams: {},
  body: data
}).then(res => {
  console.log(res)
})

//patch example
var data = new FormData()
data.append('firstname', 'kiarash')
Fetchomech.Patch({
  url: 'https://example.com/user/:id',
  headers: {},
  pathVariables: {
    id: '8'
  },
  queryParams: {},
  body: data
}).then(res => {
  console.log(res)
})

//delete example
Fetchomech.Delete({
  url: 'https://example.com/post/:id',
  headers: {},
  pathVariables: {
    id: '8'
  },
  queryParams: {},
  body: null
}).then(res => {
  console.log(res)
})
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
