<script setup lang="ts">
import useTestPage from "@/pages/test-page/model";
import { Result, Question } from "@/entities";

const {
  currentTest,
  currentQuestionIndex,
  toAnswer,
  result
} = useTestPage();
</script>

<template>
  <div v-if="!currentTest">Нет данных</div>

  <Result
    v-if="result"
    :result
  />

  <div
    v-for="(question, index) in currentTest.questions"
    :key="question.id"
  >
    <div v-if="index === currentQuestionIndex">
      <Question
        :question="question"
        @on-answer="toAnswer"
      />
    </div>
  </div>
</template>
