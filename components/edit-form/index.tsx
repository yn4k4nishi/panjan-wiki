import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { useProfile } from '@/lib/useProfile'

export default function EditForm() {
  const [_title, setTitle] = useState('')
  const [_content, setContent] = useState('')
  const [_date, setDate] = useState(new Date())
  const [_public, setPublic] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  const { id, title, content } = router.query

  const profile = useProfile()

  useEffect(() => {
    if (typeof title === 'string') {
      setTitle(title)
    }
    if (typeof content === 'string') {
      setContent(content)
    }
  }, [title, content])

  async function submitHandler(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/posts/edit-entry', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          title: _title,
          content: _content,
        }),
      })
      const json = await res.json()
      setSubmitting(false)
      if (!res.ok) throw Error(json.message)
      Router.push('/')
    } catch (e) {
      throw Error(e.message)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="my-4">
        <label htmlFor="title">
          <p className="font-bold text-lg">Title</p>
        </label>
        <input
          id="title"
          className="shadow border rounded-lg w-full p-2 focus:outline-none"
          type="text"
          name="title"
          value={_title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="title">
          <p className="text-gray-500 text-md">
            <p>Author : { profile && profile.name} </p>
            <p>Date : {_date.toString()}</p>
          </p>
        </label>
      </div>
      <div className="my-4">
        <label htmlFor="content">
          <p className="font-bold text-lg">Content</p>
        </label>
        <textarea
          className="shadow border rounded-lg focus:outline-none w-full h-96 p-2"
          id="content"
          name="content"
          value={_content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </form>
  )
}
