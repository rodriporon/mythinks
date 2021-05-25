import styles from "../../styles/HomePage.module.css"
import stylesHome from "../../styles/Home.module.css"
import { useEffect, useState } from "react"
import Think from "../../components/Think"
import useUser from "../../hooks/useUser"
import { fetchLatestThinks } from "../../firebase/client"

export default function HomePage() {
  const [Timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestThinks().then(setTimeline)
  }, [user])

  return (
    <>
      <div className={styles.container}>
        <main className={stylesHome.main}>
          <div>
            <header className={styles.header}>
              <h2 className={styles.h2}>Inicio</h2>
            </header>
            <section className={styles.section}>
              {Timeline.map(
                ({ id, userName, avatar, content, userId, createdAt }) => (
                  <Think
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
            <nav className={styles.nav}></nav>
          </div>
        </main>
      </div>
    </>
  )
}
