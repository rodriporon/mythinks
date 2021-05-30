import Avatar from "../../components/Avatar"
import styles from "../../styles/Think.module.css"
import useTimeAgo from "../../hooks/useTimeAgo"
import useDateTimeFormat from "../../hooks/useDateTimeFormat"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Think({
  avatar,
  userName,
  img,
  content,
  createdAt,
  id,
}) {
  const timeago = useTimeAgo(createdAt)
  const createdAtFormated = useDateTimeFormat(createdAt)
  const router = useRouter()

  const handleArticleClick = (e) => {
    e.preventDefault()
    router.push("/status/[id]", `/status/${id}`)
  }
  return (
    <>
      <article className={styles.article} onClick={handleArticleClick}>
        <div className={styles.div}>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <span> · </span>

            <Link href={`/status/[id]`} as={`/status/${id}`}>
              <a>
                <time title={createdAtFormated}>{timeago}</time>
              </a>
            </Link>
          </header>
          <p className={styles.p}>{content}</p>
          {img && <img className={styles.img} src={img} />}
        </section>
      </article>
      <style jsx>
        {`
          a {
            color: #555;
            font-size: 14px;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </>
  )
}
