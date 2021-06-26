import Nav from "@/components/nav"
import Container from "@/components/container"
import { useRequireLogin } from "../lib/useRequireLogin"
import MemberList from "@/components/member-list"

export default function Setting(){
    useRequireLogin()

    return (
        <>
            <Nav title="Setting"></Nav>
            <Container className="">
                <a className="font-bold text-2xl">Register Member</a>
                <MemberList className="flex justify-center"></MemberList>
            </Container>
        </>
    )
}