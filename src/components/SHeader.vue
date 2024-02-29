<template>


<div>
  <div class="relative flex justify-center">
    <div class="back w-full h-screen bg-cover">
      <div class="absolute">
        <img class="pho:block ipad:hidden w-[1300px]" src="../assets/image/shadow_2.png" alt=""/>
        <img class="pho:hidden ipad:block" src="../assets/image/shadow.png" alt=""/>
      </div>
      <div class="relative">
        <div
            class="max-w-[1250px] pt-3 m-auto text-white w-[80%] flex ipad:justify-between pho:justify-center"
        >
          <div class="flex p-0 m-0 gap-10 pho:hidden ipad:flex">
            <select class="bg-transparent">
              <option value="">Москва</option>
              <option value="">Москва</option>
              <option value="">Москва</option>
            </select>
            <p>Обратный звонок</p>
          </div>
          <div class="gap-10 pho:flex pho:justify-center text-center">
            <p>Пн-Вс 10-19</p>
            <a class="pho:hidden ipad:block">8 (495) 229 85 59</a>
            <a class="pho:block ipad:hidden" href="">Обратный звонок</a>
          </div>
        </div>

        <div class="flex justify-center pho:flex ipad:hidden">
          <img
              class="w-[219px] h-[59px] mt-5"
              src="../assets/image/logos.png"
              alt=""
          />
        </div>
        <div class="flex justify-between w-[80%] m-auto items-center mt-4">
          <div class="flex gap-4 text-white items-center pho:h-10 pho:gap-2">
            <img
                class="w-[30px] h-[30px] cursor-pointer"
                src="../assets/image/menu.png"
                alt=""
            />
            <p class="pho:hidden ipad:block">Меню</p>
            <p class="ipad:hidden pho:block">8 (495) 229 85 59</p>
          </div>
          <div class="pho:block ipad:flex">
            <img
                class="pho:hidden ipad:block"
                src="../assets/image/logos.png"
                alt=""
            />
          </div>

          <div class="flex gap-4 items-center">
            <i class="fa-solid fa-arrow-right-arrow-left fa-lg text-white cursor-pointer duration-300 hover:text-green-500"></i>

            <i
                class="fa-solid fa-magnifying-glass fa-lg cursor-pointer text-white duration-300 hover:text-green-500"
            ></i>
            <i class="fa-solid fa-bag-shopping text-slate-200 fa-lg cursor-pointer duration-300 hover:text-green-500"></i>
          </div>
        </div>

        <div
            class="box flex mt-4 justify-between text-white font-sans pho:hidden md:flex"
        >
          <p class="cursor-pointer hover:text-green-300">Мойки</p>
          <p class="cursor-pointer hover:text-green-300">Смесители</p>
          <p class="cursor-pointer hover:text-green-300">Аксессуары</p>
          <p class="cursor-pointer hover:text-green-300">Плиты</p>
          <p class="cursor-pointer hover:text-green-300">Умывальники</p>
          <p class="cursor-pointer hover:text-green-300">Manhattan</p>

          <div class="group ">
            <div class="flex items-center gap-2 cursor-pointer hover:text-green-300">
              <p>Другая продукция</p>
              <i class="fa-solid fa-chevron-down duration-700 group-hover:rotate-180"></i>
            </div>
            <div class="opacity-0 group-hover:opacity-100 z-[-1]">
              <p class="hover:bg-slate-400 px-5 cursor-pointer ">смесители</p>
              <p class="hover:bg-slate-400 px-5 cursor-pointer"> Стальные мойки</p>
            </div>
          </div>

        </div>


        <div class="box text-white flex justify-between items-center">


          <div>
            <h2
                class="md:w-[660px] md:text-[64px] pho:mt-5 md:mt-0 ipad:text-[45px] ipad:w-[450px] pho:text-[36px] pho:w-full font-extrabold"
            >
              Мойки, смесители и аксессуары
            </h2>
            <p class="md:text-[25px] md:w-[550px] pho:w-[210px] font-normal">
              от ведущего производителя сантехники для кухни Reginox
            </p>
          </div>

          <div>
            <img src="../assets/image/tabs.png" alt=""/>
          </div>
        </div>
      </div>

      <div class="pho:mt-10 flex justify-end w-[80%] mx-auto md:mt-0">
        <div class="relative flex">
          <div class="bg-red-800 w-[130px]">
            <p class="absolute z-10 flex top-8 left-10 w-[130px] text-white">
              Стальные мойки Reg-color
            </p>
          </div>
          <img class="pho:w-[130px]" src="../assets/image/photo.png" alt=""/>
        </div>
      </div>
    </div>
  </div>

  <section class="bg-slate-200">
    <div class="box">
      <h2 class="text-white md:text-[65px] pho:text-[32px] font-bold">
        THE CROWN FOR YOUR KITCHEN
      </h2>
      <div class="ipad:flex justify-between flex-wrap pho:block leading-9">
        <div class="relative group">
          <div class="flex gap-2 items-center cursor-pointer  group">

            <p class="font-semibold">Reginox bv, Nederland</p>
            <img class="w-4 h-4 duration-500 group-hover:rotate-180" src="../assets/image/bottom.png" alt=""/></div>
          <div
              class="absolute text-[13px]  bg-slate-100 px-10 opacity-0  z-[-1] group-hover:opacity-100 group-hover:z-20">
            <p>1 Loyang Lane #03-03 Nederland 508913</p>
            <div class="flex gap-3 items-center"><i class="fa-solid fa-phone"></i>
              <p>+ 65 (0) 67 88 53 63</p></div>
            <div class="flex gap-3 items-center"><i class="fa-regular fa-envelope"></i>
              <p>info@reginox.com.sg</p></div>
            <div class="flex gap-3 items-center"><i class="fa-solid fa-earth-americas"></i>
              <p>reginox.sg</p></div>
          </div>
        </div>
        <div class="relative group">
          <div class="flex gap-2 items-center cursor-pointer">

            <p class="font-semibold">Reginox Rif Holding, Russia</p>
            <img class="w-4 h-4 duration-500 group-hover:rotate-180" src="../assets/image/bottom.png" alt=""/></div>
          <div
              class="absolute text-[13px] bg-slate-100 px-10 opacity-0  z-[-1] group-hover:opacity-100 group-hover:z-20">
            <p>1 Loyang Lane #03-03 Russia 508913</p>
            <div class="flex gap-3 items-center"><i class="fa-solid fa-phone"></i>
              <p>+ 65 (0) 67 88 53 63</p></div>
            <div class="flex gap-3 items-center"><i class="fa-regular fa-envelope"></i>
              <p>info@reginox.com.sg</p></div>
            <div class="flex gap-3 items-center"><i class="fa-solid fa-earth-americas"></i>
              <p>reginox.sg</p></div>

          </div>
        </div>
        <div class="relative group ">
          <div class="flex gap-2 items-center cursor-pointer">

            <p class="font-semibold">Reginox, UK Ltd</p>
            <img class="w-4 h-4 duration-500 group-hover:rotate-180" src="../assets/image/bottom.png" alt=""/></div>
          <div
              class="absolute text-[13px]  bg-slate-100 px-10 opacity-0  z-[-1] group-hover:opacity-100 group-hover:z-20">
            <p>1 Loyang Lane #03-03 UK 508913</p>
            <div class="flex gap-3 items-center"><i class="fa-solid fa-phone"></i>
              <p>+ 65 (0) 67 88 53 63</p></div>
            <div class="flex gap-3 items-center"><i class="fa-regular fa-envelope"></i>
              <p>info@reginox.com.sg</p></div>
            <div class="flex gap-3 items-center"><i class="fa-solid fa-earth-americas"></i>
              <p>reginox.sg</p></div>

          </div>
        </div>
        <div class="relative group">
          <div class="flex gap-2 items-center cursor-pointer">

            <p class="font-semibold">Reginox, Singapure</p>
            <img class="w-4 h-4 duration-500 group-hover:rotate-180" src="../assets/image/bottom.png" alt=""/></div>
          <div
              class="absolute text-[13px]  bg-slate-100 px-10 opacity-0  z-[-1] group-hover:opacity-100 group-hover:z-20">
            <p>1 Loyang Lane #03-03 Singapore 508913</p>
            <div class="flex gap-3 items-center"><i class="fa-solid fa-phone"></i>
              <p>+ 65 (0) 67 88 53 63</p></div>
            <div class="flex gap-3 items-center"><i class="fa-regular fa-envelope"></i>
              <p>info@reginox.com.sg</p></div>
            <div class="flex gap-3 items-center"><i class="fa-solid fa-earth-americas"></i>
              <p>reginox.sg</p></div>

          </div>
        </div>
      </div>
    </div>
  </section>
</div>

</template>



<style scoped>
.box {
  width: 80%;
  margin: auto;
}

.back {
  background-image: url("../assets/image/Slider.jpg");
  height: 100vh;
}

option {
  background: black;
}
</style>
<script setup lang="ts">
</script>