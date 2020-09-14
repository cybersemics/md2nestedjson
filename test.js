const test = require('ava')
const md2nestedjson = require('./index')

test('nest headings', t => {

  const json = md2nestedjson(`
    # a
    ## a1
    ### a1.1
    # b
    ## b1
    # c
  `)

  t.is(json, [{
    value: 'a',
    children: [{
      value: 'a1',
      children: [{
        value: 'a1.1',
        children: [],
      }],
    }]
  }, {
    value: 'b',
    children: [{
      value: 'b1',
      children: [],
    }],
  }, {
    value: 'c',
    children: [],
  }])

})

test('nest headings with paragraphs', t => {

  const json = md2nestedjson(`
    # a
    x
    ## b
    y
    ## c
    z
    e
    r
    o
  `)

  t.is(json, [{
    value: 'a',
    children: [{
      value: 'x',
      children: [],
    }, {
      value: 'b',
      children: [{
        value: 'y',
        children: [],
      }],
    }, {
      value: 'c',
      children: [{
        value: 'z',
        children: [],
      }, {
        value: 'e',
        children: [],
      }, {
        value: 'r',
        children: [],
      }, {
        value: 'o',
        children: [],
      }],
    }]
  }])

})

test('nest lists', t => {

  const json = md2nestedjson(`
    - a
      - a1
        - a1.1
    - b
      - b1
    - c
  `)

  t.is(json, [{
    value: 'a',
    children: [{
      value: 'a1',
      children: [{
        value: 'a1.1',
        children: [],
      }],
    }]
  }, {
    value: 'b',
    children: [{
      value: 'b1',
      children: [],
    }],
  }, {
    value: 'c',
    children: [],
  }])

})

test('nest headings and lists', t => {

  const json = md2nestedjson(`
    # one
    - a
      - a1
        - a1.1

    # two
    - b
      - b1
    - c
  `)

  t.is(json, [{
    value: 'one',
    children: [{
      value: 'a',
      children: [{
        value: 'a1',
        children: [{
          value: 'a1.1',
          children: [],
        }],
      }]
    }, {
      value: 'two',
      children: [{
        value: 'b',
        children: [{
          value: 'b1',
          children: [],
        }],
      }, {
        value: 'c',
        children: [],
      }]
    }]
  }])

})

test('preserve HTML', t => {

  const json = md2nestedjson(`
    # Hello
    This is some <i>italic</i> text.
  `)

  t.is(json, [{
    value: 'Hello',
    children: [{
      value: 'This is some <i>italic</i> text.',
      children: [],
    }]
  }])

})
