<template>
  <div class="font-Poppins">
    <Navigation />
    <Hero />
    <div class="container grid grid-cols-3 gap-8 py-14">
      <CardDisplay
        v-for="cardInfo in cardSections"
        :key="cardInfo.id"
        :cardSection="cardInfo"
      />
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardSections: [
  {
    id: 1,
    title: "7 Tips for Organic Traffic",
    description: "From SEO to integrating with Paid Advertising, this article cover it all.",
    blogImage: "Article1.png",
    authorImage: "avatar1.png",
    authorName: "Spencer David",
    authorPosition: "SEO Specialist"
  },
  {
    id: 2,
    title: "How To Start Your Own Business",
    description: "Starting your own business in 2021 has never been easier.",
    blogImage: "Article2.png",
    authorImage: "avatar2.png",
    authorName: "Sara Fey",
    authorPosition: "Business Leader"
  },
  {
    id: 3,
    title: "5 Tips for Better Branding",
    description: "From SEO to integrating with Paid Advertising, this article covers it all.",
    blogImage: "Article3.png",
    authorImage: "avatar3.png",
    authorName: "David Suns",
    authorPosition: "Brand Manager"
  },
]
    }
  }
}
</script>
