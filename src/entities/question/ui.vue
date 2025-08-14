<script setup lang="ts">
import { computed, ref } from "vue";
import { NButton } from "naive-ui";
import { RadioGroup } from "@/shared";
import type { Option } from "naive-ui/es/transfer/src/interface";
import type { Question } from "@/shared";
;

type Props = {
  question: Question;
};

const props = defineProps<Props>();

const selectedAnswerId = ref<string>();

const options = computed<Option[]>(() => {
  return props.question?.answers?.map((answer) => ({ value: answer.id, label: answer.title })) ?? [];
});
</script>

<template>
  <div class="question">
    <h3> {{ question.title }} </h3>

    <RadioGroup
      v-model="selectedAnswerId"
      :options="options"
    />

    <NButton
      class="confirm-button"
      type="warning"
      :disabled="!selectedAnswerId"
    >
      Ответить
    </NButton>
  </div>
</template>

<style scoped>
.question {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.confirm-button {
  margin-top: 15px;
}
</style>