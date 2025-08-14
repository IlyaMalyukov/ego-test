<script setup lang="ts">
import { Result, Question } from "@/entities";
import useTestPage from "./model";

const {
  currentTest,
  currentQuestionNumber,
  totalQuestions,
  handleAnswer,
  result
} = useTestPage();
</script>

<template>
  <div v-if="!currentTest">Нет данных</div>

  <Result
    v-if="result"
    :result="result"
  />

  <div v-else-if="currentTest?.questions">
    <div
      v-for="(question, index) in currentTest.questions"
      :key="question.id"
    >
      <div v-if="index === currentQuestionNumber - 1">
        <div class="questions-count">
          Вопрос {{ currentQuestionNumber }} из {{ totalQuestions }}
        </div>
        <Question
          :question="question"
          @on-answer="handleAnswer"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.questions-count {
  color: #f2c97d;
}
</style>
