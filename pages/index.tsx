import Skeleton from 'react-loading-skeleton'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/container'
import Posts from '@/components/posts'
import ButtonLink from '@/components/button-link'
import Button from '@/components/button'
import { signOut } from 'next-auth/client'
import { useEntries } from '@/lib/swr-hooks'
import { useRequireLogin } from "../lib/useRequireLogin"

import logo from '../public/logo.svg'

export default function IndexPage() {
  useRequireLogin()

  const { entries, isLoading } = useEntries()

  if (isLoading) {
    return (
      <div className="flex w-screen h-screen">
        <div className="mx-auto">
            <Image src={logo} width={200} className="items-center"></Image>
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
          <div className="flex flex-row items-center">
            <Image src={logo} width={64} height={64}></Image>
            <Link href="/">
              <a className="font-bold text-3xl mx-8">Posts</a>
            </Link>
          </div>
          <div className="flex items-center justify-center sm:flex-col">
            <ButtonLink href="/new" className="text-center self-center w-48 mx-6 my-2 h-12">Create a New Post</ButtonLink>
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
