<template>
  <div class="container mx-auto">
    <h2>Home</h2>
    <div v-for="article in articles" v-bind:key="article.id">
      <h2>{{ article.title }}</h2>
    </div>
  </div>
</template>

<script>
import { allArticlesQuery } from "~/graphql/queiries";

export default {
  data() {
    return {
      articles: [],
    };
  },
  apollo: {
    articles: {
      prefetch: true,
      query: allArticlesQuery,
    },
  },
};
</script>

<style scoped></style>
