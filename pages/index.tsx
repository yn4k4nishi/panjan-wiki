import Skeleton from 'react-loading-skeleton'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/container'
import Posts from '@/components/posts'
import ButtonLink from '@/components/button-link'
import Button from '@/components/button'
import { signOut, useSession } from 'next-auth/client'
import { useEntries } from '@/lib/swr-hooks'
import { useRequireLogin } from "../lib/useRequireLogin"

import logo from '../public/logo.svg'

export default function IndexPage() {
  useRequireLogin()

  const { entries, isLoading } = useEntries()
  const [ session, loading ] = useSession()

  if (isLoading) {
    return (
      <div className="flex w-screen h-screen">
        <div className="mx-auto">
            <Image src={logo} width={400}></Image>
            <div className="flex flex-col items-center">
                <p className="text-center text-6xl">Loading ...</p>
            </div>
        </div>
    </div>
    )
  }

  return (
    <div>
      <Container className="py-4">
        <nav>
          <div className="flex justify-between items-center bg-gradient-to-l from-green-400">
            <div className="flex items-center">
              <Image src={logo} width={64} height={64}></Image>
              <Link href="/">
                <a className="font-bold text-3xl mx-8">Posts</a>
              </Link>
            </div>
            {!loading && 
              <div className="flex items-center mx-4">
                <Image src={session.user.image} width={48} height={48} className="rounded-full"></Image>
              </div>
            }
          </div>
          <div className="flex items-center justify-center sm:flex-col">
            <ButtonLink href="/new" className="text-center w-48 mx-6 my-2 h-12">Create a New Post</ButtonLink>
            <Button onClick={signOut} className="text-center w-48 mx-6 my-2 h-12">Sign Out</Button>
          </div>
        </nav>
      </Container>
      <Container>
        <Posts posts={entries} />
      </Container>
    </div>
  )
}
