<template>
  <nav
    class="grid grid-cols-8 z-50 pt-6 fixed w-screen px-[10%] backdrop-blur-sm"
  >
    <NuxtImg
      src="/images/logo.png"
      width="180"
      class="col-span-2"
      @click="scrollInto('home')"
    />
    <div
      class="lg:flex justify-center hidden items-center gap-8 text-sm col-span-4 [& > *]:cursor-pointer"
    >
      <NuxtLink active-class="font-bold" @click="scrollInto('home')"
        >Home</NuxtLink
      >
      <NuxtLink active-class="font-bold" @click="scrollInto('service')"
        >Service</NuxtLink
      >
      <NuxtLink active-class="font-bold" @click="scrollInto('product')"
        >Product</NuxtLink
      >
      <NuxtLink active-class="font-bold" @click="scrollInto('experience')"
        >Discover</NuxtLink
      >
      <NuxtLink active-class="font-bold" @click="scrollInto('about')"
        >About Us</NuxtLink
      >
      <NuxtLink active-class="font-bold" @click="scrollInto('testimonial')"
        >Testimonial</NuxtLink
      >
      <NuxtLink active-class="font-bold" @click="scrollInto('contact')"
        >Contact</NuxtLink
      >
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
  methods: {
    toggleMenu() {
      const menu = document.querySelector(".menu");
      menu.classList.toggle("hidden");
    },
    scrollInto(id) {
      const el = document.getElementById(id);
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
