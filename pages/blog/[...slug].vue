<template>
  <div class="container">
    <ul>
      <li v-for="{ _path: slug, title } in posts" :key="slug">
        <NuxtLink :to="slug">
          {{ title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    posts: null,
  }),
  async mounted() {
    const data = await queryContent('/blog')
      .sort({ date: -1 })
      .where({ _partial: false })
      .find();
    this.posts = data;
  },
};
</script>
