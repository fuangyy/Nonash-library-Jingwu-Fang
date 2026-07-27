<template>
  <div>
    <h1>Books with ISBN &gt; 1000</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        <template v-if="editingBookId === book.id">
          <input type="text" v-model.trim="editingName" aria-label="Book name" />
          <input type="text" v-model="editingIsbn" aria-label="Book ISBN" />
          <button type="button" @click="updateBook(book.id)">Save</button>
        </template>
        <template v-else>
          {{ book.name }} - ISBN: {{ book.isbn }}
          <button type="button" @click="startEdit(book)">Update</button>
          <button type="button" @click="deleteBook(book.id)">Delete</button>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import db from '../firebase/init.js'
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
  where
} from 'firebase/firestore'

export default {
  setup() {
    const books = ref([])
    const editingBookId = ref(null)
    const editingName = ref('')
    const editingIsbn = ref('')

    const fetchBooks = async () => {
      try {
        const q = query(
          collection(db, 'books'),
          where('isbn', '>', 1000),
          orderBy('isbn', 'desc'),
          limit(3)
        )
        const querySnapshot = await getDocs(q)
        const booksArray = []
        querySnapshot.forEach((doc) => {
          booksArray.push({
            id: doc.id,
            ...doc.data()
          })
        })
        books.value = booksArray
      } catch (error) {
        console.error('Error fetching books: ', error)
      }
    }

    const startEdit = (book) => {
      editingBookId.value = book.id
      editingName.value = book.name
      editingIsbn.value = book.isbn
    }

    const updateBook = async (bookId) => {
      const isbnNumber = Number(editingIsbn.value)

      await updateDoc(doc(db, 'books', bookId), {
        name: editingName.value,
        isbn: isbnNumber
      })
      editingBookId.value = null
      await fetchBooks()
      alert('Book updated successfully!')
    }

    const deleteBook = async (bookId) => {
      await deleteDoc(doc(db, 'books', bookId))
      await fetchBooks()
      alert('Book deleted successfully!')
    }

    onMounted(() => {
      fetchBooks()
    })

    return {
      books,
      editingBookId,
      editingName,
      editingIsbn,
      startEdit,
      updateBook,
      deleteBook
    }
  }
}
</script>
