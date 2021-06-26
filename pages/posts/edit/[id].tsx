import Container from '@/components/container'
import EditEntryForm from '@/components/edit-entry-form'
import Link from 'next/dist/client/link'
import ButtonLink from '@/components/button-link'

export default function EditEntryPage() {
  return (
    <>
      <Container className="py-4">
        <nav>
          <div className="flex justify-between items-center">
            <Link href="/">
              <a className="font-bold text-3xl">Edit</a>
            </Link>
            {/* <div className="flex flex-row-reverse">
              <ButtonLink className="text-center w-48 m-8"
                href={`/posts/edit/${id}?title=${data.title}&content=${data.content}`}
              >
                Edit
              </ButtonLink>
              <DeleteButton id={id} className="text-center w-48 m-8" />
            </div> */}
          </div>
        </nav>
      </Container>
      <Container>
        <EditEntryForm />
      </Container>
    </>
  )
}
