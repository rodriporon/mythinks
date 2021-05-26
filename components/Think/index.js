import Avatar from "../../components/Avatar"
import styles from "../../styles/Think.module.css"
import useTimeAgo from "../../hooks/useTimeAgo"

export default function Think({
  avatar,
  userName,
  img,
  content,
  createdAt,
  id,
}) {
  const timeago = useTimeAgo(createdAt)

  return (
    <>
      <article className={styles.article}>
        <div className={styles.div}>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <span> · </span>
            <time className={styles.date}>{timeago}</time>
          </header>
          <p className={styles.p}>{content}</p>
          {img && <img className={styles.img} src={img} />}
        </section>
      </article>
    </>
  )
}
