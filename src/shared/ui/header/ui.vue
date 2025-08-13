<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { NIcon } from "naive-ui";
import { ArrowLeft20Filled } from "@vicons/fluent";
import { ROUTES } from "@/shared";

const route = useRoute();

const isBackButtonVisible = computed(() => route?.path !== ROUTES.MAIN_PAGE.PATH);
</script>

<template>
  <div class="header">
    <RouterLink
      v-if="isBackButtonVisible"
      class="back"
      :to="ROUTES.MAIN_PAGE.PATH"
    >
      <NIcon
        size="20"
        color="#fff"
        :component="ArrowLeft20Filled"
      />
    </RouterLink>
    <img
      class="header-logo"
      src="/src/assets/ego.png"
      alt="logo"
    />
    <span> EGO TEST </span>
  </div>
</template>

<style scoped>
.header {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background-color: rgba(24, 24, 28, 0.7);
  backdrop-filter: blur(10px);
  padding: 1rem;
  display: flex;
  align-items: center;
}

.header-logo {
  width: 30px;
  margin-right: 10px;
}
</style>