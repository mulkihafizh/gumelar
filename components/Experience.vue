<template>
  <section class="relative" id="experience">
    <NuxtImg
      class="absolute w-2/5 bottom-0 xl:bottom-[20%]"
      src="images/graphic.png"
    />
    <div class="grid lg:grid-cols-5 min-h-screen py-24 mx-[10%]">
      <div class="col-span-3"></div>
      <main
        class="col-span-2 py-5"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <h5 class="md:text-lg text-[#452B1C] font-bold">WHY CHOOSE US?</h5>
        <h3 class="md:text-5xl font-bold">
          We helping you experience the best product
        </h3>
        <p class="py-6 text-gray-700">
          We always pay attention to quality, manufacturing procedures and
          product raw materials in order to give the best impression to
          consumers.
        </p>
        <div class="grid grid-cols-2 gap-8">
          <div
            class="card border p-6 gap-4 rounded-2xl bg-white flex flex-col items-center"
          >
            <div
              class="w-[4rem] bg-[#452B1C] rounded-xl flex-col flex items-center h-[4rem] justify-center"
            >
              <i class="fa-solid fa-xl fa-heart px-5 py-8 text-white"></i>
            </div>
            <p class="text-center">
              Our products are made with very careful calculation
            </p>
          </div>
          <div
            class="card border p-6 gap-4 rounded-2xl bg-white flex flex-col items-center"
          >
            <div
              class="w-[4rem] bg-[#452B1C] rounded-xl flex-col flex items-center h-[4rem] justify-center"
            >
              <i class="fa-solid fa-xl fa-shield px-5 py-8 text-white"></i>
            </div>
            <p class="text-center">
              Our products are made from high quality ingredients
            </p>
          </div>
          <div
            class="card border p-6 gap-4 rounded-2xl bg-white flex flex-col items-center"
          >
            <div
              class="w-[4rem] bg-[#452B1C] rounded-xl flex-col flex items-center h-[4rem] justify-center"
            >
              <i class="fa-solid fa-xl fa-dollar-sign px-7 py-8 text-white"></i>
            </div>
            <p class="text-center">
              Our products are priced at affordable prices
            </p>
          </div>
          <div
            class="card border p-6 gap-4 rounded-2xl bg-white flex flex-col items-center"
            id="experience"
          >
            <div
              class="w-[4rem] bg-[#452B1C] rounded-xl flex-col flex items-center h-[4rem] justify-center"
            >
              <i class="fa-solid fa-xl fa-utensils px-6 py-8 text-white"></i>
            </div>
            <p class="text-center">Our products have very high taste quality</p>
          </div>
        </div>
      </main>
    </div>
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
