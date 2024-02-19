<template>
  <div class="container mx-auto mt-8">
    <article class="bg-white p-8 rounded-lg shadow-lg" v-if="article">
      <h1 class="text-4xl font-bold mb-4 text-teal-600">
        {{ article.attributes.title }}
      </h1>
      <p class="text-gray-600 mb-4">{{ article.attributes.date }}</p>
      <div class="prose max-w-full" v-html="article.attributes.body"></div>
    </article>
    <div v-else class="text-center text-gray-600">Loading article...</div>
  </div>
</template>

<script>
import { singleArticleQuery } from "~/graphql/queries";

export default {
  data() {
    return {
      article: null,
    };
  },
  apollo: {
    article: {
      prefetch: true,
      query: singleArticleQuery,
      variables() {
        return { slug: this.$route.params.slug };
      },
      update: (data) => data.article.data,
    },
  },
};
</script>

<style scoped>
/* You can add additional styles here */
</style>
