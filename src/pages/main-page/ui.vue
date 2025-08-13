<script setup lang="ts">
import { NSpace } from "naive-ui";
import { TestCard } from "@/entities";
import { TEST_CARDS_DATA } from "@/shared";
</script>

<template>
  <NSpace vertical>
    <TestCard
      v-for="cardData in TEST_CARDS_DATA"
      :key="cardData.id"
      :card-data="cardData"
    />
  </NSpace>
</template>
