<template>
  <section class="grid lg:grid-cols-5 min-h-screen py-24" id="service">
    <div class="text font-bold col-span-2 self-center">
      <h5 class="md:text-lg text-[#452B1C]">SERVICES</h5>
      <h3 class="md:text-5xl text-xl">Our top value categories for you</h3>
    </div>
    <main class="col-span-3 grid md:grid-cols-2 grid-rows-1 py-5">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        class="card bg-white flex flex-col justify-between items-center gap-1 px-10 pb-28 mx-6 rounded-3xl shadow-lg my-10 py-20"
      >
        <NuxtImg src="images/food.png" width="50" />
        <h5 class="font-bold text-xl">Food</h5>
        <p class="text-sm text-gray-500 text-center">
          We sell food and drinks of the best quality and affordable prices
        </p>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
