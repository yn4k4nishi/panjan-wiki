import { NextApiHandler } from 'next'
import { query } from '../../../lib/db'
import { getSession } from 'next-auth/client'

const handler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req })
  const { title, content } = req.body

  if (session){
    try {
      if (!title || !content) {
        return res
          .status(400)
          .json({ message: '`title` and `content` are both required' })
      }
  
      const results = await query(
        `
        INSERT INTO entries (title, content)
        VALUES (?, ?)
        `,
        [title, content]
      )
  
      return res.json(results)
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  } else {
    res.status(401)
  }
  res.end()
}

export default handler
