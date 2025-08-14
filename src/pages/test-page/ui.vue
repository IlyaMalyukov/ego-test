<script setup lang="ts">
import { Result, Question } from "@/entities";
import useTestPage from "./model";

const {
  currentTest,
  currentQuestionNumber,
  totalQuestions,
  toAnswer,
  result
} = useTestPage();
</script>

<template>
  <div v-if="!currentTest">Нет данных</div>

  <Result
    v-if="result"
    :result="result"
  />

  <div
    v-for="(question, index) in currentTest.questions"
    :key="question.id"
  >
    <div v-if="index === currentQuestionNumber - 1">
      <div> Вопрос {{ currentQuestionNumber }} из {{ totalQuestions }} </div>
      <Question
        :question="question"
        @on-answer="toAnswer"
      />
    </div>
  </div>
</template>
