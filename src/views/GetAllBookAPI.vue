<template>
  <pre>{{ JSON.stringify(books, null, 2) }}</pre>
</template>

<script>
import { onMounted, ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import db from '../firebase/init.js'

export default {
  setup() {
    const books = ref([])

    const fetchBooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'books'))
        books.value = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
      } catch (error) {
        console.error('Error fetching books: ', error)
      }
    }

    onMounted(() => {
      fetchBooks()
    })

    return {
      books
    }
  }
}
</script>
