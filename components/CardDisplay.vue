<template>
  <div>
    <img class="w-full" :src="`assets/images/${cardSection.blogImage}`" alt="image" width="400">
    <h2 class="text-4xl font-bold py-6">{{ cardSection.title }}</h2>
    <p class="pb-4 text-xl text-grey">{{ cardSection.description }}</p>
    <div class="flex gap-4 items-center">
      <img :src="`assets/images/${cardSection.authorImage}`" alt="author Image" width="60">
      <div>
        <p class="font-bold">{{ cardSection.authorName }}</p>
        <p class="text-grey">{{ cardSection.authorPosition }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cardSection']
}
</script>