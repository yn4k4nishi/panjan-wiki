import mysql from 'serverless-mysql'

export const db = mysql({
  config: {
    host: process.env.mysql_host,
    database: process.env.mysql_database,
    user: process.env.mysql_user,
    password: process.env.mysql_password
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
