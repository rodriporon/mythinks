const admin = require("firebase-admin")

const serviceAccount = require(process.env.FIREBASE_KEYS_URL)

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })
} catch (e) {}

export const firestore = admin.firestore()
