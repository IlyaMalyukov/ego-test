<script setup lang="ts">
import { NCard } from "naive-ui";
import { ROUTES } from "@/shared";
import type { TestCardData } from "@/entities";

type Props = {
  cardData: TestCardData,
};

defineProps<Props>();
</script>

<template>
  <RouterLink :to="{ name: ROUTES.TEST_PAGE.NAME, query: { id: cardData.id } }">
    <NCard
      size="small"
      :title="cardData.title"
    />
  </RouterLink>

</template>