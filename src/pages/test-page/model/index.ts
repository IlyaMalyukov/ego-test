import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { TESTS } from "@/shared";
import type { Result, Answer } from "@/shared";

const useTestPage = () => {
  const route = useRoute();

  const currentTest = computed(() => {
    const currentTestId = route?.query?.id;
    return TESTS.find((test) => test.id === currentTestId);
  });

  const totalQuestions = computed(() => currentTest.value?.questions?.length ?? 0);

  const currentQuestionNumber = ref(1);

  const points = ref(0);

  const result = ref<Result>();

  const getResult = () => {
    result.value = currentTest.value?.results.find((result: Result) => {
      return result.minScore <= points.value && result.maxScore >= points.value;
    });
  };

  const handleAnswer = (answer: Answer) => {
    if (!answer) return;

    currentQuestionNumber.value += 1;
    points.value += answer.points;

    if (totalQuestions.value === currentQuestionNumber.value) {
      getResult();
    }
  };

  return {
    currentTest,
    currentQuestionNumber,
    totalQuestions,
    points,
    handleAnswer,
    result
  };
};

export default useTestPage;
