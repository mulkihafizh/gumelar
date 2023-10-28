<template>
  <nav class="grid grid-cols-8 z-50 py-6 fixed w-screen px-[10%]">
    <NuxtImg src="/images/logo.png" width="180" class="col-span-2" />
    <div class="flex justify-center items-center gap-20 text-sm col-span-4">
      <NuxtLink class="font-bold">Home</NuxtLink>
      <NuxtLink>Product</NuxtLink>
      <NuxtLink>Discover</NuxtLink>
      <NuxtLink>About Us</NuxtLink>
      <NuxtLink>Contact</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
