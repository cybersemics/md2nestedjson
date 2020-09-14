const md = require('markdown-it')()

const md2nestedjson = markdown => {
  const values = md.parseInline(markdown)[0].children
    .filter(token => token.content)
    .map(token => {
      return {
        value: token.content.replace(/#+\s*/g, ''),
        level: token.content.replace(/[^#]/g, '').length,
      }
    })
  const json = values // TODO
  return json
}

module.exports = md2nestedjson
