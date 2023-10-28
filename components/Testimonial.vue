<template>
  <section class="testimonial min-h-screen" id="testimonial">
    <div class="mx-[10%] relative">
      <div
        class="right absolute right-0 z-50 bottom-0 cursor-pointer h-fit lg:top-[50%]"
      >
        <button
          @click="nextPage"
          :class="!hasNext ? 'opacity-0 pointer-none' : ''"
          :disabled="!hasNext"
          class="fa-solid fa-arrow-right rounded-full text-white bg-[#452B1C] p-6 shadow-lg"
        ></button>
      </div>
      <div
        class="left absolute bottom-0 cursor-pointer h-fit z-50 lg:top-[50%]"
      >
        <button
          @click="previousPage"
          :class="!hasPrevious ? 'opacity-0 pointer-none' : ''"
          :disabled="!hasPrevious"
          class="fa-solid fa-arrow-left rounded-full border bg-white p-6 shadow-lg"
        ></button>
      </div>
      <TransitionGroup
        tag="div"
        class="transitions"
        name="testimonial-transition"
        mode="out-in"
      >
        <div
          class="flex flex-col gap-4 items-center lg:pb-0 pb-20"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <p class="font-bold text-2xl">TESTIMONIALS</p>
          <h3 class="font-bold text-4xl lg:text-left text-center">
            Trust our customer
          </h3>
          <NuxtImg
            src="images/tes.jpeg"
            width="150"
            height="150"
            class="rounded-full"
          />
          <p class="font-bold text-xl">
            {{ showedData.name }}
            <span class="text-base font-medium"
              >/ {{ showedData.affiliation }}</span
            >
          </p>
          <div class="rating flex items-center text-yellow-500 gap-4">
            <i
              class="fa-solid fa-star"
              v-for="(s, index) in showedData.stars"
            ></i>
          </div>
          <p class="xl:mx-96 text-center text-gray-500">
            {{ showedData.comment }}
          </p>
          <!-- <div class="rating flex items-center gap-4">
          <i class="fa-solid fa-circle text-gray-200"></i>
          <i class="fa-solid fa-circle text-[#452B1C]"></i>
          <i class="fa-solid fa-circle text-gray-200"></i>
        </div> -->
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonial: testimonials,
      currentPage: 0,
      dataPerPage: 1,
    };
  },
  computed: {
    showedData() {
      const start = this.currentPage * this.dataPerPage;
      const end = start + this.dataPerPage;
      return this.testimonial.slice(start, end)[0];
    },
    hasNext() {
      return this.currentPage < this.testimonial.length / this.dataPerPage - 1;
    },
    hasPrevious() {
      return this.currentPage > 0;
    },
  },
  methods: {
    previousPage() {
      this.currentPage--;
    },
    nextPage() {
      this.currentPage++;
    },
  },
};
</script>

<style scoped>
.testimonial {
  background-image: url("/images/Vector.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.testimonial-transition-enter-active {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.testimonial-transition-leave-active {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.testimonial-transition-leave-to {
  opacity: 0;
}
</style>
