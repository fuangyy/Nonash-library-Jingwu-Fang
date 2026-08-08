<template>
  <pre>{{ JSON.stringify(books, null, 2) }}</pre>
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
