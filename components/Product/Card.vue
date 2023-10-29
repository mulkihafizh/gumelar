<template>
  <div
    class="card bg-white border rounded-2xl grid grid-rows-6 overflow-hidden shadow-lg"
    v-for="(product, index) in product"
  >
    <NuxtImg :src="product.image" class="object-cover h-full row-span-4" />
    <div class="text flex flex-col gap-5 px-5 py-3 row-span-2">
      <div class="flex font-bold justify-between text-lg">
        <p>{{ product.name }}</p>
        <p>Rp. {{ product.price }}</p>
      </div>
      <a class="text-sm text-gray-500 cursor-pointer" target="_blank" :href="product.message">Buy now</a>
      <p class="star font-bold justify-self-end">
        {{ product.rating }} <i class="fa-solid fa-star"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: products,
    };
  },
};
</script>

<style lang="scss" scoped></style>
