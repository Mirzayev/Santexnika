<template>
  <HomePage />
  <RouterLink />
  <RouterView />
</template>

<script setup>
import HomePage from "@/Pages/HomePage.vue";
import { RouterLink, RouterView } from "vue-router";
</script>
