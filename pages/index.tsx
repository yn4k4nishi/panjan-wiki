import Skeleton from 'react-loading-skeleton'

import Nav from '@/components/nav'
import Container from '@/components/container'
import Posts from '@/components/posts'

import { useEntries } from '@/lib/swr-hooks'
import { useRequireLogin } from "../lib/useRequireLogin"

export default function IndexPage() {
  useRequireLogin()

  const { entries, isLoading } = useEntries()

  if (isLoading) {
    return (
      <div>
        <Nav />
        <Container>
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
        </Container>
      </div>
    )
  }

  return (
    <div>
      <Nav />
      <Container>
        <Posts posts={entries} />
      </Container>
    </div>
  )
}
