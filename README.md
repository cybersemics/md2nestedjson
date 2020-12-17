# md2nestedjson

Convert markdown to JSON.

- Nest headings
- Nest lists
  - optional
- Uses [markdown-it](https://github.com/markdown-it) to parse.

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
- Uses [markdown-it](https://github.com/markdown-it) to parse.

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
    }, {
      value: 'Uses [markdown-it](https://github.com/markdown-it) to parse.',
      children: [],
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
