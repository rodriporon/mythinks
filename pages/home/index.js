import styles from "../../styles/HomePage.module.css"
import stylesHome from "../../styles/Home.module.css"
import { useEffect, useState } from "react"
import Think from "../../components/Think"

export default function HomePage() {
  const [Timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline)
  }, [])

  return (
    <>
      <div className={styles.container}>
        <main className={stylesHome.main}>
          <div>
            <header className={styles.header}>
              <h2 className={styles.h2}>Inicio</h2>
            </header>
            <section className={styles.section}>
              {Timeline.map((think) => (
                <Think
                  key={think.id}
                  username={think.username}
                  avatar={think.avatar}
                  message={think.message}
                  id={think.id}
                />
              ))}
            </section>
            <nav className={styles.nav}></nav>
          </div>
        </main>
      </div>
    </>
  )
}
