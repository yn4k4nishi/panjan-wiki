import Link from 'next/link'
import Container from '@/components/container'
import ButtonLink from '@/components/button-link'
import Button from '@/components/button'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Nav({ title = 'Posts' }) {
  return (
    <Container className="py-4">
      <nav>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="font-bold text-3xl">{title}</a>
          </Link>
          <ButtonLink href="/new" className="m-2">Create a New Post</ButtonLink>
          <Button onClick={signOut} className="text-center w-48 m-8">Sign Out</Button>
        </div>
      </nav>
    </Container>
  )
}
