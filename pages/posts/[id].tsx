import { useRouter } from 'next/router'
import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import { useEntry } from '@/lib/swr-hooks'
import Container from '@/components/container'
import Link from 'next/link'
import ButtonLink from '@/components/button-link'
import Button from '@/components/button'

import { signIn, signOut, useSession } from 'next-auth/client'

export default function EditEntryPage() {
  const router = useRouter()
  const id = router.query.id?.toString()
  const { data } = useEntry(id)

  if (data) {
    return (
      <>
        <Container className="py-4">
          <nav>
            <div className="flex justify-between items-center">
              <Link href="/">
                <a className="font-bold text-3xl">View</a>
              </Link>
              <div className="flex flex-row-reverse">
                <ButtonLink className="text-center w-48 m-8"
                  href={`/posts/edit/${id}?title=${data.title}&content=${data.content}`}
                >
                  Edit
                </ButtonLink>
                <Button className="text-center w-48 m-8">Delete</Button>
              </div>
            </div>
          </nav>
        </Container>
        <Container>
          <h1 className="font-bold text-3xl my-2">{data.title}</h1>
          <div className="markdown-preview">
            <ReactMarkdown plugins={[gfm]} unwrapDisallowed={false}>
              {data.content}
            </ReactMarkdown>
          </div>
        </Container>
      </>
    )
  } else {
    return (
      <>
        <Container className="py-4">
          <nav>
            <div className="flex justify-between items-center">
              <Link href="/">
                <a className="font-bold text-3xl">View</a>
              </Link>
              <ButtonLink href="/new" className="m-2">Create a New Post</ButtonLink>
              <Button onClick={signOut} className="text-center w-48 m-8">Sign Out</Button>
            </div>
          </nav>
        </Container>
        <Container>
          <h1 className="font-bold text-3xl my-2">...</h1>
          <p>...</p>
        </Container>
      </>
    )
  }
}
