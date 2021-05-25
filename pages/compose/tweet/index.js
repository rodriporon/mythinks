import stylesHomePage from "../../../styles/HomePage.module.css"
import stylesHome from "../../../styles/Home.module.css"
import styles from "../../../styles/ComposeTweet.module.css"
import Button from "../../../components/Button"
import useUser from "../../../hooks/useUser"
import { useState } from "react"

import { addThink } from "../../../firebase/client"
import { useRouter } from "next/router"

const COMPOSE_STATES = {
  USER_NOT_KNOW: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
}
export default function ComposeTweet() {
  const user = useUser()
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW)
  const router = useRouter()

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus(COMPOSE_STATES.LOADING)
    addThink({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username,
    })
      .then(() => {
        router.push("/home")
      })
      .catch((err) => {
        console.log(err)
        setStatus(COMPOSE_STATES.ERROR)
      })
  }

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

  return (
    <>
      <div className={stylesHomePage.container}>
        <main className={stylesHome.main}>
          <form onSubmit={handleSubmit}>
            <textarea
              onChange={handleChange}
              className={styles.textarea}
              placeholder="¿Qué está pasando?"
            ></textarea>
            <div className={styles.div}>
              <Button disabled={isButtonDisabled}>Thinkear</Button>
            </div>
          </form>
        </main>
      </div>
    </>
  )
}
