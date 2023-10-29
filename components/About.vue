<template>
  <section class="relative" id="about">
    <NuxtImg
      class="absolute w-2/5 xl:bottom-[20%] right-0 bottom-0"
      src="images/graphic2.png"
    />
    <div class="grid lg:grid-cols-5 min-h-screen py-24 mx-[10%]">
      <main
        class="col-span-2 py-5"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <h5 class="md:text-lg text-[#452B1C] font-bold">ABOUT US</h5>
        <h3 class="md:text-5xl text-xl font-bold">What is Gumelar Company?</h3>
        <p class="py-6 text-gray-700">
          Gumelar is a company that focuses on creating innovative products for
          consumers through a website platform. Gumelar offers a variety of
          products including food and beverages.
        </p>
        <div class="flex flex-col gap-3">
          <div
            class="card border p-6 gap-4 rounded-2xl bg-white flex items-center"
          >
            <div
              class="w-[4rem] bg-[#A0511D] rounded-xl flex-col flex items-center h-[4rem] justify-center"
            >
              <i
                class="fa-solid fa-xl fa-hand-back-fist px-5 py-8 text-white"
              ></i>
            </div>

            <div class="flex flex-col gap-2">
              <h5 class="font-bold">Mission</h5>
              <p class="text-sm">
                Developing local West Java products in the form of more
                contemporary products
              </p>
            </div>
          </div>
          <div
            class="card border p-6 gap-4 rounded-2xl bg-white flex items-center"
          >
            <div
              class="w-[4rem] bg-[#BE301C] rounded-xl flex-col flex items-center h-[4rem] justify-center"
            >
              <i
                class="fa-solid fa-xl fa-hand-back-fist px-5 py-8 text-white rounded-xl"
              ></i>
            </div>
            <div class="flex flex-col gap-2">
              <h5 class="font-bold">Mission</h5>
              <p class="text-sm">
                Facilitate product innovation with technological developments in
                terms of improving the quality of products that are easy to use
                and practical
              </p>
            </div>
          </div>
          <div
            class="card border p-6 gap-4 rounded-2xl bg-white flex items-center"
          >
            <div
              class="w-[4rem] bg-[#A0511D] rounded-xl flex-col flex items-center h-[4rem] justify-center"
            >
              <i
                class="fa-solid fa-xl fa-hand-back-fist px-6 py-7 text-white rounded-xl"
              ></i>
            </div>
            <div class="flex flex-col gap-2">
              <h5 class="font-bold">Mission</h5>
              <p class="text-sm">
                Prioritizing product taste and quality in order to maintain
                product quality.
              </p>
            </div>
          </div>
          <div
            class="card border p-6 gap-4 rounded-2xl bg-white flex items-center"
          >
            <div
              class="w-[4rem] bg-[#BE301C] rounded-xl flex-col flex items-center h-[4rem] justify-center"
            >
              <i
                class="fa-solid fa-xl fa-hand-back-fist px-6 py-7 text-white rounded-xl"
              ></i>
            </div>
            <div class="flex flex-col gap-2">
              <h5 class="font-bold">Mission</h5>
              <p class="text-sm">
                Prioritize consumer satisfaction with in-depth product reviews
                and testing
              </p>
            </div>
          </div>
        </div>
      </main>
      <div class="col-span-3"></div>
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
