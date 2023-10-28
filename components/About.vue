<template>
  <section class="relative">
    <NuxtImg
      class="absolute w-2/5 bottom-[20%] right-0"
      src="images/graphic2.png"
    />
    <div class="grid lg:grid-cols-5 min-h-screen py-24 mx-[10%]">
      <main class="col-span-2 py-5">
        <h5 class="md:text-lg text-[#452B1C] font-bold">ABOUT US</h5>
        <h3 class="md:text-5xl font-bold">
            What is Gumelar Company?
        </h3>
        <p class="py-6 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          expedita sed iusto minima necessitatibus fugit quoshic ipsam molestias
          quae.
        </p>
        <div class="flex flex-col gap-8">
          <div
            class="card border p-6 gap-4 rounded-2xl bg-white flex items-center"
          >
            <i
              class="fa-solid fa-xl fa-calendar-days px-5 py-8 bg-[#A0511D] text-white rounded-full"
            ></i>
            <div class="flex flex-col gap-2">
              <h5 class="font-bold">Lorem Ipsum</h5>
              <p class="text-sm">
                Our products are made from high quality ingredients
              </p>
            </div>
          </div>
          <div
            class="card border p-6 gap-4 rounded-2xl bg-white flex items-center"
          >
            <i
              class="fa-solid fa-xl fa-shield px-5 py-8 bg-[#F7B93C] text-white rounded-full"
            ></i>
            <div class="flex flex-col gap-2">
              <h5 class="font-bold">Lorem Ipsum</h5>
              <p class="text-sm">
                Our products are made from high quality ingredients
              </p>
            </div>
          </div>
          <div
            class="card border p-6 gap-4 rounded-2xl bg-white flex items-center"
          >
            <i
              class="fa-solid fa-xl fa-dollar-sign px-7 py-8 bg-[#BE301C] text-white rounded-full"
            ></i>
            <div class="flex flex-col gap-2">
              <h5 class="font-bold">Lorem Ipsum</h5>
              <p class="text-sm">
                Our products are made from high quality ingredients
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
