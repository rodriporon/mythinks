import Avatar from "../../components/Avatar"
import styles from "../../styles/Think.module.css"

export default function Think({ avatar, username, message, id }) {
  return (
    <>
      <article className={styles.article}>
        <div className={styles.div}>
          <Avatar alt={styles.username} src={avatar} />
        </div>
        <section>
          <strong>{username}</strong>
          <p className={styles.p}>{message}</p>
        </section>
      </article>
    </>
  )
}
