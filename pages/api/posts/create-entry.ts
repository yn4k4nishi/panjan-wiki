import { NextApiHandler } from 'next'
import { query } from '../../../lib/db'
import { getSession } from 'next-auth/client'

const handler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req })
  const { title, content, author, date, _public } = req.body

  if (session){
    try {
      if (!title || !content || !author || !date || !_public) {
        return res
          .status(400)
          .json({ message: '`title`, `content`, `author`, `date` and `_public` are required' })
      }
  
      const results = await query(
        `
        INSERT INTO posts (title, content, author, date, public)
        VALUES (?, ?, ?, ?, ?)
        `,
        [title, content, author, date, _public]
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
