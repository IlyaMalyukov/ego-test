<script setup lang="ts">

const innerValue = defineModel();

const options = [
  {
    value: "Shakermaker",
    label: "Shakermaker"
  },
  {
    value: "Live Forever",
    label: "Live Forever"
  }
];
</script>

<template>
  <NRadioGroup
    v-model:value="innerValue"
    :options
  />
</template>

<style scoped>

</style>