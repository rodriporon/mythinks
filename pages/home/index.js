import styles from "../../styles/HomePage.module.css"
import { useEffect, useState } from "react"
import Think from "../../components/Think"
import useUser from "../../hooks/useUser"
import { fetchLatestThinks } from "../../firebase/client"
import Link from "next/link"
import Create from "../../components/Icons/Create"
import Home from "../../components/Icons/Home"
import Search from "../../components/Icons/Search"
import Head from "next/head"

export default function HomePage() {
  const [Timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestThinks().then(setTimeline)
  }, [user])

  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <header className={styles.header}>
        <h2 className={styles.h2}>Inicio</h2>
      </header>
      <section className={styles.section}>
        {Timeline.map(
          ({ id, userName, avatar, img, content, userId, createdAt }) => (
            <Think
              img={img}
              key={id}
              userName={userName}
              avatar={avatar}
              content={content}
              id={id}
              userId={userId}
              createdAt={createdAt}
            />
          )
        )}
      </section>
      <nav className={styles.nav}>
        <Link href="/compose/tweet">
          <a>
            <Home width={30} height={30} />
          </a>
        </Link>
        <Link href="/compose/tweet">
          <a>
            <Search width={30} height={30} />
          </a>
        </Link>
        <Link href="/compose/tweet">
          <a>
            <Create width={30} height={30} />
          </a>
        </Link>
      </nav>
    </>
  )
}
