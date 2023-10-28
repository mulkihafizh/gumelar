<template>
  <section class="testimonial min-h-screen">
    <div class="mx-[10%] relative">
      <div class="right absolute right-0 top-[50%]">
        <i
          class="fa-solid fa-arrow-right rounded-full text-white bg-[#452B1C] p-6 shadow-lg"
        ></i>
      </div>
      <div class="right absolute top-[50%]">
        <i
          class="fa-solid fa-arrow-left rounded-full border bg-white p-6 shadow-lg"
        ></i>
      </div>
      <div class="flex flex-col gap-4 items-center">
        <p class="font-bold text-2xl">TESTIMONIALS</p>
        <h3 class="font-bold text-4xl">Trust our customer</h3>
        <NuxtImg
          src="images/tes.jpeg"
          width="150"
          height="150"
          class="rounded-full"
        />
        <p class="font-bold text-xl">
          Kucing Lucu <span class="text-base font-medium">/ Pelajar</span>
        </p>
        <div class="rating flex items-center text-yellow-500 gap-4">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <p class="mx-96 text-center text-gray-500">
          Pie susunya sangat enak sekali saya sampai ketagihan pesan
          berkali-kali, harganya juga sesuai banget sama kantong pelajar, top
          banget deh pokoknya
        </p>
        <div class="rating flex items-center gap-4">
          <i class="fa-solid fa-circle text-gray-200"></i>
          <i class="fa-solid fa-circle text-[#452B1C]"></i>
          <i class="fa-solid fa-circle text-gray-200"></i>
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
.testimonial {
  background-image: url("/images/Vector.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
