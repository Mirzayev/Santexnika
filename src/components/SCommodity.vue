<template>
  <div class="box">
    <div>
      <h2 class="my-10 text-[42px] font-semibold">Популярные товары</h2>
      <div class="">
        <div class="md:grid md:grid-cols-3 gap-8 ipad:grid ipad:grid-cols-2">
          <div
            v-for="products in product"
            :key="products"
            class="group relative bg-slate-100 px-10 pt-[50px] pb-5 mb-10"
          >
            <img
              class="bg-transparent object-cover"
              :src="products.image"
              alt=""
            />
            <p class="mt-[60px]">{{ products.text_1 }}</p>
            <p class="  ">{{ products.text_2 }}</p>
            <div
              class="z-10 opacity-0 group-hover:opacity-100 absolute bottom-[0px] group-hover:bottom-[-30px] text-white left-0 items-center transition-all duration-900 gap-3 bg-red-500 w-full px-[20px] h-10 mt-6 pb-0 group-hover:flex"
            >
              <i class="fa-solid fa-bag-shopping"></i>
              <p>В корзину</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const product = ref([
  {
    image: "src/assets/image/product_1.png",
    text_1: "Amsterdam 25 Dark chocolate",
    text_2: "9 950 руб",
  },
  {
    image: "src/assets/image/product_2.png",
    text_1: "YADKIN K1065K black",
    text_2: "31 000 руб",
  },
  {
    image: "src/assets/image/product_3.png",
    text_1: "Diplomat R 20 lux",
    text_2: "17 000 руб",
  },
  {
    image: "src/assets/image/product_4.png",
    text_1: "Столешница WAFELBLAD R00939",
    text_2: "47 520 руб",
  },
  {
    image: "src/assets/image/product_5.png",
    text_1: "Amsterdam 34 Caffe Silvery",
    text_2: "19 000 руб",
  },
  {
    image: "src/assets/image/product_6.png",
    text_1: "R18 370 OSP lux",
    text_2: "7 300 руб",
  },
]);
</script>

<style scoped>
.box {
  width: 80%;
  margin: auto;
}
</style>
