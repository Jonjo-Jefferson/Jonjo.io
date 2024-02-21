<template>
  <section>
    <h4 class="border-gray-200 pb-2 text-4xl font-bold text-gray-100">Latest Posts</h4>
    <div class="relative grid grid-cols-4 gap-3">
      <div
        v-for="article in articles.slice(0, 4)"
        :key="article.id"
        class="grid-rows-1 overflow-hidden rounded bg-white shadow-xl">
        <img class="h-50 w-full object-cover sm:h-80" src="/images/hero_0063.png" alt="" />
        <div class="m-4">
          <span class="text-xl text-orange-400">{{ article.attributes.title }}</span>
          <span class="block text-sm text-gray-500">{{ article.attributes.description }}</span>
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
