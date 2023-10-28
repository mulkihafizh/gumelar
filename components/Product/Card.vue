<template>
  <div
    class="card bg-white border rounded-2xl grid grid-rows-6 overflow-hidden shadow-lg"
  >
    <NuxtImg src="images/pie.png" class="object-cover h-full row-span-4" />
    <div class="text flex flex-col gap-5 px-5 py-3 row-span-2">
      <div class="flex font-bold justify-between text-lg">
        <p>Pie Susu</p>
        <p>Rp. 3000</p>
      </div>
      <p class="text-sm text-gray-500">Buy now</p>
      <p class="star font-bold justify-self-end">
        4.8 <i class="fa-solid fa-star"></i>
      </p>
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

<style lang="scss" scoped></style>
