<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background"></div>
      <div class="container mx-auto text-center hero-content">
        <h1 class="text-5xl font-bold text-white mb-4">Jonjo.io</h1>
        <p class="text-lg text-white">
          Explore the latest articles and stay updated with our insights.
        </p>
      </div>
    </section>

    <!-- Latest Articles Section -->
    <section class="latest-articles py-12 bg-gray-100">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <h2
          class="text-4xl font-bold mb-8 text-center text-teal-600 col-span-2"
        >
          Latest Articles
        </h2>

        <!-- Article Cards -->
        <div
          v-for="article in articles"
          :key="article.id"
          class="article-card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          <h2 class="text-2xl font-semibold text-teal-600">
            {{ article.attributes.title }}
          </h2>
          <p class="text-gray-600">{{ article.attributes.date }}</p>
          <p class="mt-4 text-gray-800">{{ article.attributes.description }}</p>
          <router-link
            :to="{ name: 'article', params: { slug: article.attributes.slug } }"
            class="text-teal-500 hover:underline mt-4 inline-block"
          >
            Read more
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { allArticlesQuery } from "~/graphql/queries";

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
      loadingKey: "loading",
    },
  },
};
</script>

<style scoped>
/* Hero Section Styles */
.hero {
  position: relative;
  height: 400px; /* Adjust the height as needed */
  margin-top: 0; /* Updated to start at the top of the screen */
  background: url("/images/poster2_0004.png") center/cover no-repeat;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Adjust the overlay color and opacity */
}

.hero h1 {
  margin-top: 150px; /* Adjust the vertical alignment of text */
}

/* Article Card Styles */
.article-card {
  transition: transform 0.3s ease;
}

.article-card:hover {
  transform: translateY(-5px);
}
</style>
