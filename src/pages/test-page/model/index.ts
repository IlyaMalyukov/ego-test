import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { TESTS } from "@/shared";
import type { Test, Result } from "@/shared";

const useTestPage = () => {
  const route = useRoute();

  const currentTest = computed<Test>(() => {
    const currentTestId = route?.query?.id;
    return TESTS.find((test) => test.id === currentTestId);
  });

  const currentQuestionIndex = ref(0);
  const totalQuestions = ref(0);

  const points = ref(0);

  const result = ref<Result>();

  const toAnswer = () => {
  };

  return {
    currentTest,
    currentQuestionIndex,
    totalQuestions,
    points,
    toAnswer,
    result
  };
};

export default useTestPage;
