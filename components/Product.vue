<template>
  <section class="min-h-screen h-[120vh] py-24 flex flex-col">
    <header class="grid lg:grid-cols-5">
      <div class="text font-bold col-span-2">
        <h5 class="md:text-lg text-[#452B1C]">OUR BEST PRODUCT</h5>
        <h3 class="md:text-3xl">Explore our best product</h3>
      </div>
      <div
        class="col-span-3 grid md:grid-cols-2 grid-rows-1 py-5 justify-self-end gap-2"
      >
        <div class="left">
          <i
            class="fa-solid fa-arrow-left rounded-full border p-6 shadow-xl"
          ></i>
        </div>
        <div class="right">
          <i
            class="fa-solid fa-arrow-right rounded-full text-white bg-[#452B1C] p-6 shadow-lg"
          ></i>
        </div>
      </div>
    </header>
    <main class="grid grid-cols-3 h-full flex-grow gap-6">
      <ProductCard />
      <ProductCard />
      <ProductCard />
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
