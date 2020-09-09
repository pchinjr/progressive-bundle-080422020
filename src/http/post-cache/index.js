const data = require('@begin/data')

exports.handler = async function invalidate() {

  let table = 'module-cache'
  let limit = 25 

  for await (let page of data.page({ table, limit }))
    try { await data.destroy(page) } catch {}

  return {
    statusCode: 302,
    headers: { 'location': '/cache' }
  }
}
