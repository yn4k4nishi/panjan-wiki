import { useState } from 'react'
import { mutate } from 'swr'
import { useRouter } from 'next/router'

import Button from '@/components/button'

function DeleteButton({ id, className }) {
  const [deleting, setDeleting] = useState(false)
  const router = useRouter()

  async function deleteEntry() {
    setDeleting(true)
    let res = await fetch(`/api/posts/delete-entry?id=${id}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/posts/get-entries')
    setDeleting(false)
    router.push('/')
  }

  return (
    <Button
      disabled={deleting}
      onClick={deleteEntry}
      className={className}
    >
      {deleting ? 'Deleting ...' : 'Delete'}
    </Button>
  )
}

export default DeleteButton