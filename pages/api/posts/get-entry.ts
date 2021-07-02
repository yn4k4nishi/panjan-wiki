import { NextApiHandler } from 'next'
import { query } from '../../../lib/db'
import { getSession } from 'next-auth/client' 

const handler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req })
  const { id } = req.query

  if (session){
    try {
      if (!id) {
        return res.status(400).json({ message: '`id` required' })
      }
      if (typeof parseInt(id.toString()) !== 'number') {
        return res.status(400).json({ message: '`id` must be a number' })
      }
      const results = await query(
        `
        SELECT *
        FROM posts
        WHERE id = ?
      `,
        id
      )
  
      return res.json(results[0])
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  } else {
    res.status(401)
  }
  res.end()
}

export default handler
