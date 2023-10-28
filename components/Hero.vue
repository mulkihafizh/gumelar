<template>
  <section class="grid lg:grid-cols-5 min-h-screen items-center py-24">
    <main class="text col-span-2 flex flex-col gap-8 relative">
      <NuxtImg
        src="images/obj.png"
        width="50"
        class="absolute -bottom-32 -left-24"
      />
      <div class="bar flex">
        <p class="px-6 bg-white rounded-full font-bold py-2 text-sm shadow-xl">
          Feel the best experience with us
        </p>
      </div>
      <h1 class="md:text-7xl font-bold">
        We always provide <span class="text-[#22100C]">the best</span> products
      </h1>
      <p class="text-gray-500 md:text-lg w-3/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor expedita
        sed iusto minima necessitatibus fugit quos hic ipsam molestias quae.
      </p>
      <div class="flex">
        <button
          class="bg-[#22100C] text-white py-3 px-8 rounded-full font-bold text-sm"
        >
          Explore More
        </button>
      </div>
    </main>
    <div class="col-span-3 flex justify-center">
      <div class="grid grid-cols-2 gap-5">
        <div class="col-span-1 grid grid-rows-2 gap-5 py-10">
          <div class="row-span-1 flex justify-center items-center">
            <NuxtImg
              src="/images/hero2.jpeg"
              width="230"
              height="230"
              class="rounded-3xl"
            />
          </div>
          <div class="row-span-1 flex justify-center items-center">
            <NuxtImg
              src="/images/hero3.jpeg"
              width="230"
              height="230"
              class="rounded-3xl"
            />
          </div>
        </div>
        <div class="col-span-1 grid grid-rows-2 gap-5 py-10">
          <div class="row-span-2 flex justify-center items-center relative">
            <div
              class="absolute bg-white bottom-20 md:bottom-24 lg:px-5 px-2 py-1 lg:py-4 font-bold text-xs rounded-full -right-5 shadow-lg lg:-right-20"
            >
              <i class="fa-solid fa-location-dot text-[#22100C]"></i>
              Top Product
            </div>
            <NuxtImg
              src="/images/hero1.jpeg"
              width="230"
              height="350"
              class="rounded-3xl"
            />
          </div>
        </div>
      </div>
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
