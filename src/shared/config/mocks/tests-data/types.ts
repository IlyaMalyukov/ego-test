type Answer = {
  id: string;
  title: string;
  points: number;
};

type Question = {
  id: string;
  title: string;
  answers: Answer[];
};

type Result = {
  minScore: number;
  maxScore: number;
  title: string;
  description: string;
  advice: string[];
};

type Test = {
  id: string;
  questions: Question[];
  results: Result[];
};

export type {
  Answer,
  Question,
  Result,
  Test
};
