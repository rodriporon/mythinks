import styles from "../../../styles/ComposeTweet.module.css"
import Button from "../../../components/Button"
import useUser from "../../../hooks/useUser"
import { useState, useEffect } from "react"

import { addThink, uploadImage } from "../../../firebase/client"
import { useRouter } from "next/router"
import Head from "next/head"
import Avatar from "components/Avatar"

const COMPOSE_STATES = {
  USER_NOT_KNOW: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
}

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
}

export default function ComposeTweet() {
  const user = useUser()
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW)
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [task, setTask] = useState(null)
  const [imgURL, setImgURL] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if (task) {
      const onProgress = () => {}
      const onError = () => {}
      const onComplete = () => {
        task.snapshot.ref.getDownloadURL().then(setImgURL)
      }
      task.on("state_changed", onProgress, onError, onComplete)
    }
  }, [task])
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

  const handleDragEnter = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.DRAG_NONE)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.DRAG_NONE)
    const file = e.dataTransfer.files[0]
    const task = uploadImage(file)
    setTask(task)
  }

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

  return (
    <>
      <Head>
        <title>Escribe algo</title>
      </Head>
      <section className="form-container">
        {user && (
          <section className="avatar-container">
            <Avatar src={user.avatar} />
          </section>
        )}
        <form onSubmit={handleSubmit} className={styles.form}>
          <textarea
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onChange={handleChange}
            placeholder="¿Qué está pasando?"
          ></textarea>
          {imgURL && (
            <section className="remove-img">
              <button onClick={() => setImgURL(null)}>x</button>
              <img src={imgURL} />
            </section>
          )}
          <div className={styles.div}>
            <Button disabled={isButtonDisabled}>Thinkear</Button>
          </div>
        </form>
      </section>
      <style jsx>{`
        .remove-img {
          position: relative;
        }

        .form-container {
          display: flex;
          align-items: flex-start;
        }

        .avatar-container {
          margin-top: 20px;
          padding-left: 10px;
        }
        textarea {
          border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER
            ? "3px dashed #09f"
            : "3px solid transparent"};
          font-size: 18px;
          width: 100%;
          padding: 15px;
          resize: none;
          outline: 0;
          min-height: 200px;
        }
        button {
          background: rgba(0, 0, 0, 0.3);
          border: 0;
          top: 15px;
          color: #fff;
          position: absolute;
          right: 15px;
          border-radius: 999px;
          width: 32px;
          height: 32px;
          font-size: 24px;
        }
        img {
          border-radius: 10px;
          height: auto;
          width: 100%;
        }
      `}</style>
    </>
  )
}
