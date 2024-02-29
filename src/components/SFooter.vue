<template>
  <div class="relative bg-slate-300 mt-10">
    <div class="absolute top-[20px] left-[37%]">
      <div class="flex justify-center gap-4 text-grey ipad:hidden">
        <i
          class="fa-brands fa-facebook-f cursor-pointer hover:text-red-700"
        ></i>
        <i class="fa-brands fa-twitter cursor-pointer hover:text-red-700"></i>
        <i class="fa-brands fa-vk cursor-pointer hover:text-red-700"></i>
        <i class="fa-brands fa-instagram cursor-pointer hover:text-red-700"></i>
      </div>
    </div>
    <div class="w-[80%] m-auto">
      <div
        class="flex items-end justify-between pt-10 pb-5 flex-wrap pho:block ipad:flex"
      >
        <div class="flex gap-10 justify-between pho:pt-8">
          <img src="../assets/image/logo_TSG.png" alt="" />
          <img src="../assets/image/PRHolding_logo.png" alt="" />
        </div>

        <div class="flex gap-4 text-red-700 pho:hidden ipad:flex">
          <i
            class="fa-brands fa-facebook-f cursor-pointer hover:text-red-400 duration-300"
          ></i>
          <i
            class="fa-brands fa-twitter cursor-pointer hover:text-red-400 duration-300"
          ></i>
          <i
            class="fa-brands fa-vk cursor-pointer hover:text-red-400 duration-300"
          ></i>
          <i
            class="fa-brands fa-instagram cursor-pointer hover:text-red-400 duration-300"
          ></i>
        </div>

        <div class="flex gap-6 justify-center pho:mt-5 ipad:mt-0">
          <div class="w-8 bg-red-500 h-[60px]"></div>
          <div class="w-4 bg-red-500 h-[60px]"></div>
          <div class="w-2 bg-slate-200 h-[60px]"></div>
          <div class="w-4 bg-red-500 h-[60px]"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style scoped></style>
