<script setup lang="ts">
import { computed } from "vue";
import { NSpace } from "naive-ui";
import { TestCard } from "@/entities";
import { TESTS } from "@/shared";
import type { TestCardData } from "@/entities";

const testCardsData = computed<TestCardData[]>(() => TESTS.map((test) => ({ id: test.id, title: test.title })));
</script>

<template>
  <NSpace vertical>
    <TestCard
      v-for="cardData in testCardsData"
      :key="cardData.id"
      :card-data="cardData"
    />
  </NSpace>
</template>
