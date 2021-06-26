import { NextApiHandler } from 'next'
import { query } from '../../../lib/db'
import { getSession } from 'next-auth/client'

const handler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req })
  const { id, title, content } = req.body

  if (session){
    try {
      if (!id || !title || !content) {
        return res
          .status(400)
          .json({ message: '`id`,`title`, and `content` are all required' })
      }
  
      const results = await query(
        `
        UPDATE entries
        SET title = ?, content = ?
        WHERE id = ?
        `,
        [title, content, id]
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
