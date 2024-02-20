<template>
  <div class="bg-black">
    <div class="mx-auto max-w-screen-xl">
      <!-- Hero Section -->
      <section class="dark:bg-gray-900">
        <div
          class="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1
              class="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-gray-100 md:text-5xl xl:text-6xl">
              Where Innovation Meets Entertainment
            </h1>
            <p
              class="mb-6 max-w-2xl font-light text-gray-200 md:text-lg lg:mb-8 lg:text-xl">
              From AI insights to coding adventures and game design thrills, dive into the
              tech-savvy universe with Jonjo.io. Simplifying the complexities of
              technology, one byte at a time!
            </p>
            <a
              href="#"
              class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4">
              Blog
              <svg
                class="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
            <a
              href="#"
              class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4">
              Learn
              <svg
                class="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-300 hover:bg-gray-600 focus:ring-4 focus:ring-white dark:border-gray-100 dark:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-200">
              About Me
            </a>
          </div>
          <div class="hidden lg:col-span-5 lg:mt-0 lg:flex">
            <img class="rounded-lg" src="/images/hero_0063.png" alt="mockup" />
          </div>
        </div>
      </section>

      <section class="mt-6">
        <h4 class="border-gray-200 pb-2 text-4xl font-bold text-gray-100">
          Latest Posts
        </h4>
        <div class="relative grid grid-cols-4 gap-3">
          <div
            v-for="article in articles"
            :key="article.id"
            class="overflow-hidden rounded bg-white shadow-xl">
            <img
              class="h-50 w-full object-cover sm:h-80"
              src="/images/hero_0063.png"
              alt="" />
            <div class="m-4">
              <span class="text-xl text-orange-400">{{ article.attributes.title }}</span>
              <span class="block text-sm text-gray-500">{{
                article.attributes.description
              }}</span>
              <div
                class="absolute top-0 mt-2 rounded-full bg-slate-300 p-2 text-xs font-bold uppercase">
                <span>{{ article.attributes.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-16">
        <h4 class="border-gray-200 pb-2 text-4xl font-bold text-gray-100">
          Latest Tutorials
        </h4>
        <div class="grid grid-cols-6 gap-3">
          <div
            v-for="article in articles"
            :key="article.id"
            class="relative overflow-hidden rounded bg-white shadow-xl">
            <img class="h-30 w-full object-cover" src="/images/hero_0063.png" alt="" />
            <div class="m-4">
              <span>{{ article.attributes.title }}</span>
              <span class="block text-sm text-gray-500">{{
                article.attributes.date
              }}</span>
              <div
                class="absolute top-0 mt-2 rounded-full bg-slate-300 p-2 text-xs font-bold uppercase">
                <span>{{ article.attributes.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { allArticlesQuery } from '~/graphql/queries';

export default {
  data() {
    return {
      articles: [],
      loading: true,
    };
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
