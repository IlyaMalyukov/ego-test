<script setup lang="ts">
import type { Result } from "@/shared";

type Props = {
  result: Result;
};

defineProps<Props>();
</script>

<template>
  <div>
    <h1> {{ result.title }} </h1>
    <div> {{ result.description }}</div>

    <ul>
      <li v-for="advice in result.advice">
        {{ advice }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>