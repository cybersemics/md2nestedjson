const md = require('markdown-it')()

const md2nestedjson = markdown => {
  const tokens = md.parse(markdown)

  const isOnlyCodeBlocks = tokens.every(token => token.type === 'code_block')
  const json = tokens.map(token =>
    token.type === 'code_block' ? md2nestedjson(token.content)
    : token
  )

  console.log('json', JSON.stringify(json, null, 2))

//     .filter(token => token.content)
//     .map(token => {
//       const trimmed = token.content.trim()
//       return {
//         token,
//         value: token.content.replace(/[#-]+\s*/g, ''),
//         ...trimmed.startsWith('#') ? { headingLevel: token.content.replace(/[^#]/g, '').length } : null,
//         ...trimmed.startsWith('-') ?  { listLevel: token.content.match(/^( *)-.*/g, '') } : null,
//       }
//     })

  return isOnlyCodeBLocks ? json.flat() : json
}

module.exports = md2nestedjson
