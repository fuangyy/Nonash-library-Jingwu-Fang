<template>
  <div class="table-responsive">
    <h1>Books from Firestore</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Book Name</th>
          <th scope="col">ISBN</th>
          <th scope="col">Document ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.name }}</td>
          <td>{{ book.isbn }}</td>
          <td class="text-break">{{ book.id }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const getBooksUrl = 'https://count-books-syrcpypgzw.cn-hongkong.fcapp.run'

export default {
  setup() {
    const books = ref([])

    const fetchBooks = async () => {
      try {
        const response = await axios.get(getBooksUrl)
        books.value = response.data.books
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
