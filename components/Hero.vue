<template>
  <section
    class="grid lg:grid-cols-5 grid-cols-1 min-h-screen items-center py-24"
    id="home"
  >
    <main
      class="text lg:col-span-2 order-2 lg:order-1 flex flex-col gap-8 relative"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
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
        Whether you're celebrating a special occasion, marking a milestone, or
        simply treating yourself to a moment of pure indulgence, our Signature
        Milk Pie is the hero of your dessert story.
      </p>
      <div class="flex">
        <button
          @click="scrollTo('service')"
          class="bg-[#22100C] text-white py-3 px-8 rounded-full font-bold text-sm"
        >
          Explore More
        </button>
      </div>
    </main>
    <div class="lg:col-span-3 order-1 lg:order-2 flex justify-center">
      <div class="grid grid-cols-2 gap-5">
        <div class="col-span-1 grid grid-rows-2 gap-5 py-10">
          <div class="row-span-1 flex justify-center items-center">
            <NuxtImg
              data-aos="fade-right"
              data-aos-duration="500"
              src="/images/javatea.jpg"
              width="230px"
              height="230px"
              class="rounded-3xl"
            />
          </div>
          <div class="row-span-1 flex justify-center items-center">
            <NuxtImg
              data-aos="fade-left"
              data-aos-duration="1500"
              src="/images/pie2.jpg"
              width="230px"
              height="230px"
              class="rounded-3xl"
            />
          </div>
        </div>
        <div class="col-span-1 grid grid-rows-2 gap-5 py-10">
          <div class="row-span-2 flex justify-center items-center relative">
            <div
              class="absolute z-[999] bg-white bottom-20 md:bottom-24 lg:px-5 px-2 py-1 lg:py-4 font-bold text-xs rounded-full -right-5 shadow-lg lg:-right-20"
            >
              <i class="fa-solid fa-location-dot text-[#22100C]"></i>
              Top Product
            </div>
            <NuxtImg
              data-aos="fade-down"
              data-aos-duration="1500"
              src="/images/pie3.jpg"
              width="230px"
              height="350px"
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
  methodsy: {
    scrollTo(id) {
      const el = document.getElementById(id);
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
