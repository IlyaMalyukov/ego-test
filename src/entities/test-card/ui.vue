<script setup lang="ts">
import { NCard } from "naive-ui";
import type { TestCardData } from "@/shared";

type Props = {
  cardData: TestCardData,
};

defineProps<Props>();
</script>

<template>
  <RouterLink :to="{ name: 'test-page', query: { id: cardData.id } }">
    <NCard
      size="small"
      :title="cardData.title"
    />
  </RouterLink>

</template>