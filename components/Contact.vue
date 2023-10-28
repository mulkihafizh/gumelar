<template>
  <div class="contact min-h-screen my-24">
    <div class="flex flex-col items-center py-48 gap-8">
      <p class="font-bold text-xl text-[#452B1C]">CONTACT & FIND US</p>
      <h1 class="text-5xl font-bold text-center">
        For order and further information, please contact the information below
      </h1>
      <div class="grid grid-cols-3 gap-6 py-20 w-full">
        <div class="item flex items-center gap-6">
          <i
            class="fa-brands fa-instagram fa-2xl bg-gray-500 py-8 px-5 rounded-full"
          ></i>
          <p class="font-bold text-xl text-gray-800">@gumelar.comp</p>
        </div>
        <div class="item flex items-center justify-self-center gap-6">
          <i
            class="fa-brands fa-whatsapp fa-2xl bg-gray-500 py-8 px-5 rounded-full"
          ></i>
          <p class="font-bold text-xl text-gray-800">62-812-7976-659</p>
        </div>
        <div class="item flex items-center justify-self-end gap-6">
          <i
            class="fa-brands fa-tiktok fa-2xl bg-gray-500 py-8 px-5 rounded-full"
          ></i>
          <p class="font-bold text-xl text-gray-800">@gumelar.comp</p>
        </div>
      </div>
    </div>
  </div>
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
