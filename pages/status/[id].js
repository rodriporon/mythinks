import Think from "components/Think"
import { firestore } from "firebase/admin"
import { useRouter } from "next/router"

export default function ThinkPage(props) {
  const router = useRouter()

  if (router.isFallback) return "Cargando..."
  return (
    <>
      <Think {...props} />
      <style jsx>{``}</style>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "0BawNg4rMA9gLJHqoInF" } }],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const { id } = params

  return firestore
    .collection("thinks")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data

      const props = {
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      }
      return { props }
    })
    .catch(() => {
      return { props: {} }
    })
}
