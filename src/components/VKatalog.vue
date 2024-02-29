<template>
  <div>
    <div class="box">
      <h3 class="text-[48px] uppercase font-bold my-10">каталог</h3>
      <div
        class="ipad:grid ipad:grid-cols-2 ipad:gap-8 pho:block md:grid md:grid-cols-3"
      >
        <div
          v-for="catalogs in catalog"
          :key="catalogs"
          class="group relative pho:mb-6 transition-all duration-500 hover:translate-y-[-55px]"
        >
          <img :src="catalogs.image" class="w-full" alt="" />
          <div
            class="absolute bottom-0 opacity-0 h-[55px] bg-red-500 w-full transition-all duration-700 group-hover:opacity-100 group-hover:bottom-[-55px] cursor-pointer flex items-center"
          >
            <div class="text-white p-2 flex gap-4 items-center pl-4">
              <i class="fa-solid fa-list"></i>
              <p>Перейти в каталог</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const catalog = ref([
  { image: "src/assets/image/preview1.png" },
  { image: "src/assets/image/preview2.png" },
  { image: "src/assets/image/preview3.png" },
  { image: "src/assets/image/preview4.png" },
  { image: "src/assets/image/preview5.png" },
  { image: "src/assets/image/preview6.png" },
  { image: "src/assets/image/preview7.png" },
  { image: "src/assets/image/preview8.png" },
  { image: "src/assets/image/preview9.png" },
]);
</script>

<style scoped>
.box {
  width: 80%;
  margin: auto;
}
select {
  background: transparent;
}
img:hover {
  cursor: pointer;
}
</style>
