import { firestore } from "firebase/admin"

export default (request, response) => {
  const { query } = request
  const { id } = query

  firestore
    .collection("thinks")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data

      response.json({
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      })
    })
    .catch(() => {
      console.log("400")
      response.status(404).end()
    })
}
