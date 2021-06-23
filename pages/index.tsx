import Skeleton from 'react-loading-skeleton'
import Link from 'next/link'
import Container from '@/components/container'
import Posts from '@/components/posts'
import ButtonLink from '@/components/button-link'
import Button from '@/components/button'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useEntries } from '@/lib/swr-hooks'
import { useRequireLogin } from "../lib/useRequireLogin"

export default function IndexPage() {
  useRequireLogin()

  const { entries, isLoading } = useEntries()

  if (isLoading) {
    return (
      <div>
        <Container className="py-4">
          <nav>
            <div className="flex justify-between items-center">
              <Link href="/">
                <a className="font-bold text-3xl">Posts</a>
              </Link>
              <ButtonLink href="/new" className="m-2">Create a New Post</ButtonLink>
              <Button onClick={signOut} className="text-center w-48 m-8">Sign Out</Button>
            </div>
          </nav>
        </Container>
        <Container>
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
        </Container>
      </div>
    )
  }

  return (
    <div>
      <Container className="py-4">
        <nav>
          <div className="flex justify-between items-center">
            <Link href="/">
              <a className="font-bold text-3xl">Posts</a>
            </Link>
            <ButtonLink href="/new" className="m-2">Create a New Post</ButtonLink>
            <Button onClick={signOut} className="text-center w-48 m-8">Sign Out</Button>
          </div>
        </nav>
      </Container>
      <Container>
        <Posts posts={entries} />
      </Container>
    </div>
  )
}
