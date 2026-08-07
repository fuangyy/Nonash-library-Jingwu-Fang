<template>
  <div id="app">
    <h1>Book Counter</h1>
    <button type="button" @click="getBookCount">Get Book Count</button>
    <p v-if="count !== null">Total number of books: {{ count }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

const count = ref(null)
const error = ref(null)
const countBooksUrl = 'https://count-books-syrcpypgzw.cn-hongkong.fcapp.run'

const getBookCount = async () => {
  count.value = null
  error.value = null

  try {
    const response = await axios.get(countBooksUrl)
    count.value = response.data.count
  } catch (requestError) {
    console.error('Error fetching book count:', requestError)
    error.value = 'Unable to get the book count from Alibaba Cloud.'
  }
}
</script>
