import Link from 'next/link'
import Container from '@/components/container'
import ButtonLink from '@/components/button-link'
import Button from '../button'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Nav({ title = 'Posts' }) {
  const [ session, loading ] = useSession()

  return (
    <Container className="py-4">
      <nav>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="font-bold text-3xl">{title}</a>
          </Link>
          
          {!session && <div>
            {/* <ButtonLink href="/new" className="m-2" disabled>New Entry</ButtonLink> */}
            <Button onClick={signIn}>Sign In</Button>
          </div>}
          {session && <div>
            <ButtonLink href="/new" className="m-2">New Entry</ButtonLink>
            <Button onClick={signOut}>Sign Out</Button>
          </div>}

        </div>
      </nav>
    </Container>
  )
}
