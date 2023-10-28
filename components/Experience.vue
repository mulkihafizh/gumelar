<template>
  <section class="relative">
    <NuxtImg class="absolute w-2/5 bottom-[20%]" src="images/graphic.png" />
    <div class="grid lg:grid-cols-5 min-h-screen py-24 mx-[10%]">
      <div class="col-span-3"></div>
      <main class="col-span-2 py-5">
        <h5 class="md:text-lg text-[#452B1C] font-bold">WHY CHOOSE US?</h5>
        <h3 class="md:text-5xl font-bold">
          We helping you experience the best product
        </h3>
        <p class="py-6 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          expedita sed iusto minima necessitatibus fugit quoshic ipsam molestias
          quae.
        </p>
        <div class="grid grid-cols-2 gap-8">
          <div
            class="card border p-6 gap-4 rounded-2xl bg-white flex flex-col items-center"
          >
            <i
              class="fa-solid fa-xl fa-heart px-5 py-8 bg-[#452B1C] text-white rounded-full"
            ></i>
            <p class="text-center">
              Our products are made from high quality ingredients
            </p>
          </div>
          <div
            class="card border p-6 gap-4 rounded-2xl bg-white flex flex-col items-center"
          >
            <i
              class="fa-solid fa-xl fa-shield px-5 py-8 bg-[#452B1C] text-white rounded-full"
            ></i>
            <p class="text-center">
              Our products are made from high quality ingredients
            </p>
          </div>
          <div
            class="card border p-6 gap-4 rounded-2xl bg-white flex flex-col items-center"
          >
            <i
              class="fa-solid fa-xl fa-dollar-sign px-7 py-8 bg-[#452B1C] text-white rounded-full"
            ></i>
            <p class="text-center">
              Our products are made from high quality ingredients
            </p>
          </div>
          <div
            class="card border p-6 gap-4 rounded-2xl bg-white flex flex-col items-center"
          >
            <i
              class="fa-solid fa-xl fa-utensils px-6 py-8 bg-[#452B1C] text-white rounded-full"
            ></i>
            <p class="text-center">
              Our products are made from high quality ingredients
            </p>
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
