import Nav from '@/components/nav'
import Container from '@/components/container'
import EntryForm from '@/components/entry-form'
import { useRequireLogin } from "../lib/useRequireLogin"

export default function NewEntryPage() {
  useRequireLogin()
  
  return (
    <>
      <Nav title="New" />
      <Container className="w-full lg:w-2/4">
        <EntryForm />
      </Container>
    </>
  )
}
