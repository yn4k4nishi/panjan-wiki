import { NextApiHandler } from 'next'
import { query } from '../../../lib/db'
import { getSession } from 'next-auth/client'

const handler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req })
  const { mail } = req.query

  if(session){
    try {
      if (!mail) {
        return res.status(400).json({ message: '`mail` required' })
      }
      
      const results = await query(
        `
        DELETE FROM member
        WHERE mail = ?
        `,
        mail
      )
      res.json(results)
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  } else {
    res.status(401)
  }
  res.end()
}

export default handler
