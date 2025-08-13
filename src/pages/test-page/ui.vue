<script setup lang="ts">
import useTestPage from "@/pages/test-page/model";

const {
  currentTest
} = useTestPage();
</script>

<template>
  <div v-if="!currentTest">Нет данных</div>


</template>
