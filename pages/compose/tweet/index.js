import stylesHomePage from "../../../styles/HomePage.module.css"
import stylesHome from "../../../styles/Home.module.css"
import styles from "../../../styles/ComposeTweet.module.css"
import Button from "../../../components/Button"

export default function ComposeTweet() {
  return (
    <>
      <div className={stylesHomePage.container}>
        <main className={stylesHome.main}>
          <form>
            <textarea
              className={styles.textarea}
              placeholder="¿Qué está pasando?"
            ></textarea>
            <div className={styles.div}>
              <Button>Thinkear</Button>
            </div>
          </form>
        </main>
      </div>
    </>
  )
}
