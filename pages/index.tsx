import Image from 'next/image'
import logo from '../public/logo.svg'
import Button from '@/components/button'

export default function Home() {
    return(
        <div className="w-screen h-screen">
            <div className="flex flex-wrap content-evenly">
                <Image src={logo} width={400} className="mx-8"></Image>
                <div>
                    <p className="text-6xl m-auto">Panjan Wiki</p>
                    <Button>Sign In</Button>
                </div>
            </div>
        </div>
    )
}
