import Image from 'next/image'
import logo from '../public/logo.svg'
import Button from '@/components/button'
import { signIn, signOut, useSession } from 'next-auth/client'
import {useRouter} from 'next/router';
import { useEffect } from 'react';

export default function Login() {
  const [ session, loading ] = useSession()
  const router = useRouter()
    
  useEffect(() => {
    if(session) router.push("/");
  })
  
  
  return(
    <div className="flex w-screen h-screen">
        <div className="mx-auto">
            <Image src={logo} width={400}></Image>
            <div className="flex flex-col items-center">
                <p className="text-center text-6xl">Panjan Wiki</p>
                <Button onClick={signIn} className="text-center w-48 m-8">Sign In</Button>
            </div>
        </div>
    </div>
  )
}
