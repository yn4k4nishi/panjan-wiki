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
import { Menu } from '@material-ui/core'
import { MenuItem } from '@material-ui/core'

import logo from '../public/logo.svg'
import { useState , MouseEvent } from 'react'

export default function IndexPage() {
  useRequireLogin()

  const { entries, isLoading } = useEntries()
  const [ session, loading ] = useSession()
  
  const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
          <div className="flex justify-between items-center bg-gradient-to-l from-blue-400">
            <div className="flex items-center">
              <Image src={logo} width={64} height={64}></Image>
              <Link href="/">
                <a className="font-bold text-3xl mx-8">Posts</a>
              </Link>
            </div>
            { !loading && Boolean(session) && <>
              <button className="flex items-center mx-4 focus:outline-none" onClick={handleClick}>
                <Image src={session.user.image} width={48} height={48} className="rounded-full"></Image>
              </button>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin = {{vertical:'bottom', horizontal:'right'}}
                transformOrigin = {{vertical:'top', horizontal:'right'}}
              >
                <div className="px-2 py-1 mx-2 my-1 border">
                  <p>Profile</p>
                  <ul>
                    <li className="text-xs mx-2">{session.user.name}</li>
                    <li className="text-xs mx-2">{session.user.email}</li>
                  </ul>
                </div>
                <Link href="/setting"><MenuItem>Setting</MenuItem></Link>
                <MenuItem onClick={() => { handleClose(); signOut() }}>Sign Out</MenuItem>
              </Menu>
            </>}
          </div>
          <div className="flex items-center justify-center sm:flex-col">
            <ButtonLink href="/new" className="text-center w-48 mx-6 my-2 h-12">Create a New Post</ButtonLink>
            {/* <Button onClick={signOut} className="text-center w-48 mx-6 my-2 h-12">Sign Out</Button> */}
          </div>
        </nav>
      </Container>
      <Container>
        <Posts posts={entries} />
      </Container>
    </div>
  )
}
