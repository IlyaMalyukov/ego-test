<script setup lang="ts">
import { NConfigProvider, NRadioButton, NRadioGroup } from "naive-ui";
import type { Option } from "naive-ui/es/transfer/src/interface";
import { RADIO_THEME_OVERRIDES } from "./model";
;

type Props = {
  options: Option[];
};

defineProps<Props>();

const innerValue = defineModel<string>();
</script>

<template>
  <NConfigProvider :theme-overrides="RADIO_THEME_OVERRIDES">
    <NRadioGroup
      v-model:value="innerValue"
    >
      <NRadioButton
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </NRadioButton>
    </NRadioGroup>
  </NConfigProvider>
</template>

<style scoped>
.n-radio-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: max-content;
}

.n-radio-button {
  height: max-content !important;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 3px;
  line-height: 1.7 !important;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.n-radio-button__state-border {
  display: none;
}

:deep(.n-radio-group__splitor) {
  display: none;
  height: 0;
}
</style>
