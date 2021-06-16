import mysql from 'serverless-mysql'

export const db = mysql({
  config: {
    host: process.env.SQL_PANJAN_WIKI_IP,
    user: process.env.SQL_PANJAN_WIKI_USERNAME,
    password: process.env.SQL_PANJAN_WIKI_PASSWORD
  }
})

export async function query(
  q: string,
  values: (string | number)[] | string | number = []
) {
  try {
    const results = await db.query(q, values)
    await db.end()
    return results
  } catch (e) {
    throw Error(e.message)
  }
}
