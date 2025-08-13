<script setup lang="ts">
import { RouterView } from "vue-router";
import { NConfigProvider, darkTheme } from "naive-ui";
import { Header } from "@/shared";
</script>

<template>
  <NConfigProvider :theme="darkTheme">
    <Header />
    <RouterView />
  </NConfigProvider>
</template>
