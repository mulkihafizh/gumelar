<template>
  <div class="max-w-screen overflow-hidden">
    <Hero class="mx-[10%]" />
    <Service class="mx-[10%]" />
    <Product class="mx-[10%]" />
    <Experience />
    <About />
    <Testimonial />
    <Contact />
    <Footer class="mx-[10%]" />
  </div>
</template>

<script>
export default {};
</script>

<script setup>
  useHead({
    title: "Gumelar Company",
  });
</script>

<style scoped>
.main {
  background-color: #f5f5f5;
}
</style>
