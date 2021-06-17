import {useRouter} from "next/router";
import Link from 'next/link'

export default function Home() {
  const router = useRouter();

  return <>
    <h1>The server should not be touched when we are on the client</h1>
    <h2>Click on the link to see... (I added 3 sec delay)</h2>

    <Link href="/id1"><a>CLICK ME</a></Link>

    <h3>it is waiting for the server, why?</h3>
  </>;
}