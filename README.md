# md2nestedjson

Convert markdown to JSON.

- Nest headings
- Nest lists
  - optional

## Install

```sh
npm install md2nestedjson
```

## Usage

```js
const mdToJson = require('md2nestedjson')

const json = mdToJson(`

# md2nestedjson

Convert markdown to JSON.

- Nest headings
- Nest lists
  - optional

## Install
npm install md2nestedjson

`)

console.log(json)

/*

[{
  value: 'md2nestedjson',
  children: [{
    value: 'Convert markdown to JSON.',
    children: [{
      value: 'Nest headings',
      children: [],
    }, {
      value: 'Nest lists',
      children: [{
        value: 'optional',
        children: [],
      }],
    }]
  }]
}, {
  value: 'Install',
  children: [{
    value: 'npm install md2nestedjson',
    children: [],
  }],
}]

*/
```
