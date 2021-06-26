import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useSession} from "next-auth/client";

export function useRequireLogin() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (loading) return null;
    if (!session) router.push("/login");
  }, [loading, session])
}