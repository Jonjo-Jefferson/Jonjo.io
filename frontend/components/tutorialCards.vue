<template>
  <section class="mt-16">
    <h4 class="border-gray-200 pb-2 text-4xl font-bold text-gray-100">Latest Tutorials</h4>
    <div class="grid grid-cols-6 gap-3">
      <div
        v-for="article in articles.slice(0, 6)"
        :key="article.id"
        class="relative overflow-hidden rounded bg-white shadow-xl">
        <img class="h-30 w-full object-cover" src="/images/hero_0063.png" alt="" />
        <div class="m-4">
          <span>{{ article.attributes.title }}</span>
          <span class="block text-sm text-gray-500">{{ article.attributes.date }}</span>
          <div class="absolute top-0 mt-2 rounded-full bg-slate-300 p-2 text-xs font-bold uppercase">
            <span>{{ article.attributes.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { allArticlesQuery } from '~/graphql/queries';

export default {
  setup() {
    return {};
  },
  apollo: {
    articles: {
      prefetch: true,
      query: allArticlesQuery,
      update: (data) => data.articles.data,
      loadingKey: 'loading',
    },
  },
};
</script>

<style scoped></style>
