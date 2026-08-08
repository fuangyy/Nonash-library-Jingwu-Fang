import { cert, getApps, initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const jsonResponse = (statusCode, body) => ({
  statusCode,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'access-control-allow-origin': '*'
  },
  body: JSON.stringify(body)
})

export const buildBooksPayload = (documents) => ({
  count: documents.length,
  books: documents.map((document) => ({
    id: document.id,
    ...document.data()
  }))
})

export async function handler() {
  const required = [
    'FIREBASE_PROJECT_ID',
    'FIREBASE_CLIENT_EMAIL',
    'FIREBASE_PRIVATE_KEY'
  ]
  const missing = required.filter((name) => !process.env[name])
  if (missing.length > 0) {
    return jsonResponse(500, { error: `Missing configuration: ${missing.join(', ')}` })
  }

  try {
    if (getApps().length === 0) {
      initializeApp({
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
        })
      })
    }

    const snapshot = await getFirestore().collection('books').get()
    return jsonResponse(200, buildBooksPayload(snapshot.docs))
  } catch (error) {
    console.error('count-books failed:', error.message)
    return jsonResponse(500, { error: 'Unable to read books from Firebase Firestore' })
  }
}
