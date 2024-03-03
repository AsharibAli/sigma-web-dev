"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session);
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut("google")}>Sign out for Google</button> <br/>
      <button onClick={() => signOut("github")}>Sign out for Github</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn("github")}>Sign in using Github</button> <br/>
    <button onClick={() => signIn("google")}>Sign in using Google</button>
  </>
}