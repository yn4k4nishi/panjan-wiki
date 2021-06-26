import { NextApiHandler } from 'next'
import { query } from '../../../lib/db'
import { getSession } from 'next-auth/client'

const handler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req })
  const { name, mail } = req.body

  if (session){
    try {
      if (!name || !mail) {
        return res
          .status(400)
          .json({ message: '`name` and `mail` are both required' })
      }
  
      const results = await query(
        `
        INSERT INTO member (name, mail)
        VALUES (?, ?)
        `,
        [name, mail]
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