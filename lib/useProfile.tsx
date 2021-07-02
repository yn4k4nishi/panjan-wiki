import {useSession} from "next-auth/client";
import useSWR from "swr";

interface Profile {
    name: string;
    mail: string;
    icon: string;
}

async function fetcher(url: string) {
    const res = await fetch(url)
    return res.json()
}

export function useProfile(){
    const [session, loading] = useSession()

    const { data, error } = useSWR('/api/member/get-username', fetcher )

    if (!data){
        return
    }

    const profile : Profile = {
        name : data[0].name,
        mail : session.user.email,
        icon : session.user.image
    }
    
    return profile
}