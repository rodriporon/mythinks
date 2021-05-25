import Avatar from "../../components/Avatar"
import styles from "../../styles/Think.module.css"

export default function Think({ avatar, userName, content, createdAt, id }) {
  return (
    <>
      <article className={styles.article}>
        <div className={styles.div}>
          <Avatar alt={styles.username} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <span> · </span>
            <date className={styles.date}>{createdAt}</date>
          </header>
          <p className={styles.p}>{content}</p>
        </section>
      </article>
    </>
  )
}
