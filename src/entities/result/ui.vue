<script setup lang="ts">
import { NButton } from "naive-ui";
import { ROUTES } from "@/shared";
import type { Result } from "@/shared";

type Props = {
  result: Result;
};

defineProps<Props>();
</script>

<template>
  <div>
    <h2> {{ result.title }} </h2>
    <div class="description"> {{ result.description }}</div>

    <ul>
      <li
        v-for="advice in result.advice"
        :key="advice"
      >
        {{ advice }}
      </li>
    </ul>

    <br>

    <RouterLink :to="ROUTES.MAIN_PAGE.PATH">
      <NButton type="warning">
        Выбрать другой тест
      </NButton>
    </RouterLink>
  </div>
</template>

<style scoped>
.description {
  color: #f2c97d;
}

li {
  text-align: left;
}
</style>