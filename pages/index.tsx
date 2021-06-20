import Image from 'next/image'
import logo from '../public/logo.svg'
import Button from '@/components/button'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
    const [ session, loading ] = useSession()

    return(
        <div className="flex w-screen h-screen">
            <div className="mx-auto">
                <Image src={logo} width={400}></Image>
                <div className="flex flex-col items-center">
                    <p className="text-center text-6xl">Panjan Wiki</p>
                    {!session && <div>
                        <Button onClick={signIn} className="text-center w-48 m-8">Sign In</Button>
                    </div>}
                    {session && <div>
                        <Button onClick={signOut} className="text-center w-48 m-8">Sign Out</Button>
                        <p>{session.user.name}</p>
                        <p>{session.user.email}</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}
