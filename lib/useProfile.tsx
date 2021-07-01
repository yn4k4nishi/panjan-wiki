import {useSession} from "next-auth/client";

interface Profile {
    name: string;
    mail: string;
    icon: string;
}

export function useProfile(){
    const [session, loading] = useSession()

    let p : Profile = {
        name : session.user.name,
        mail : session.user.email,
        icon : session.user.image
    }
    
    return p
}