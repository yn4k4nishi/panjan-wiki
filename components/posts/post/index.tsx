import { useState } from 'react'
import Link from 'next/link'
import { mutate } from 'swr'

import ButtonLink from '@/components/button-link'
import Button from '@/components/button'

function Post({ id, title, content }) {
  const [deleting, setDeleting] = useState(false)

  async function deleteEntry() {
    setDeleting(true)
    let res = await fetch(`/api/posts/delete-entry?id=${id}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/posts/get-entries')
    setDeleting(false)
  }
  return (
    <Link href={`/posts/${id}`}>
      <div className="flex flex-col items-start bg-gray-100 rounded-md border-r-2 border-b-2 hover:bg-gray-200 cursor-pointer">
        <a className="font-bold text-xl p-2">{title}</a>
        <p className="text-sm text-gray-400 px-8">author : date</p> {/* TODO : 著者と日付の表示 */}
      </div>
    </Link>
  )
}

export default Post
