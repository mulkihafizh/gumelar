<template>
  <section class="min-h-screen relative" id="contact">
    <NuxtImg
      class="absolute right-0 -bottom-32"
      width="80"
      src="images/object.png"
    />

    <div
      class="flex contact mx-[10%] flex-col items-center pt-48 pb-20 gap-8 my-24"
    >
      <p class="font-bold text-xl text-[#452B1C]">CONTACT & FIND US</p>
      <h1 class="lg:text-5xl text-2xl font-bold text-center">
        For order and further information, please contact the information below
      </h1>
      <div
        class="grid lg:grid-cols-2 gap-6 py-20 w-full"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div class="item flex items-center justify-self-center gap-6">
          <i
            class="fa-brands fa-instagram fa-2xl bg-gray-500 py-8 px-5 rounded-full"
          ></i>
          <p class="font-bold md:text-xl text-gray-800">@gumelar.comp</p>
        </div>
        <div class="item flex items-center justify-self-center gap-6">
          <i
            class="fa-brands fa-whatsapp fa-2xl bg-gray-500 py-8 px-5 rounded-full"
          ></i>
          <p class="font-bold md:text-xl text-gray-800">62-812-7976-659</p>
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

<style scoped>
.contact {
  background-image: url("/images/mulki.png");
  background-repeat: no-repeat;
}
</style>
