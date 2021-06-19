import Image from 'next/image'
import logo from '../public/logo.svg'

export default function Home() {
    return(
        <div className="w-screen h-screen">
            <div className="">
                <Image src={logo} width={400}></Image>
                <h1>Panajan Wiki</h1>
            </div>
        </div>
    )
}
