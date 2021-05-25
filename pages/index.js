import { useEffect } from "react"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import Button from "../components/Button"
import GitHub from "../components/Icons/GitHub"

import { loginWithGitHub } from "../firebase/client"

import { useRouter } from "next/router"
import useUser, { USER_STATES } from "../hooks/useUser"

export default function Home() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace("/home")
  }, [user])

  const handleClick = () => {
    loginWithGitHub().catch((err) => {
      console.log(err)
    })
  }
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>mythinks 🚀</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <section className={styles.section}>
            <img className={styles.img} src="/Thinks.png" alt="Logo" />
            <h1 className={styles.title}>Thinks</h1>
            <h3>Talk about anything</h3>
            <div className={styles.button}>
              {user === USER_STATES.NOT_LOGGED && (
                <Button onClick={handleClick}>
                  <GitHub fill="#fff" />
                  Login with GitHub
                </Button>
              )}

              {user === USER_STATES.NOT_KNOWN && (
                <img className={styles.loading} src="/loading.gif" />
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
