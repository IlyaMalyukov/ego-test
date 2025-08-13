<script setup lang="ts">
import { NPageHeader } from "naive-ui";
</script>

<template>
  <NPageHeader
    class="header"
    title="EGO TEST"
  >
    <template #avatar>
      <img
        class="header-logo"
        src="/src/assets/ego.png"
        alt="logo"
      />
    </template>
  </NPageHeader>
</template>

<style scoped>
.header {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background-color: rgba(24, 24, 28, 0.7);
  backdrop-filter: blur(10px);
  padding: 10px;
}

.header-logo {
  width: 30px;
}
</style>