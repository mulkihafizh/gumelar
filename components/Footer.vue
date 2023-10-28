<template>
  <section class="grid grid-cols-1 lg:grid-cols-6 pb-5 pt-2 gap-10">
    <main class="flex flex-col lg:col-span-3">
      <NuxtImg src="images/logo.png" width="150" />
      <p class="text-sm text-gray-500 mt-5 lg:text-xl">
        Gumelar is a startup company that focuses on creating innovative
        products for consumers through a website platform. Gumelar offers a
        variety of products including food and beverages.
      </p>
    </main>
    <div class="footer-row-2 flex flex-col gap-4 lg:gap-12">
      <h3 class="font-bold text-lg">Company</h3>
      <p class="cursor-pointer" @click="scrollTo('about')">About Us</p>
    </div>
    <div class="footer-row-2 flex flex-col gap-4 lg:gap-12">
      <h3 class="font-bold text-lg">Contact</h3>
      <p class="break-words">gumelarcompany@gmail.com</p>
      <p class="">+62 857-1762-2276</p>
    </div>
    <div class="footer-row-2 flex flex-col gap-4 lg:gap-12">
      <h3 class="font-bold text-lg">Meet Us</h3>
      <p>Jl Raya wangun, Tajur, Bogor</p>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
