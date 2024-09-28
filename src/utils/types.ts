export type COLORS = "magenta" | "green" | "red";

export type QUESTION = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  timeLimit: number;
};

export type QUESTION_CATEGORY_TYPE = {
  id: string;
  name: string;
  questions: QUESTION[];
};

export type SELECT_BOX_ARG = {
  topic: string;
  id: string;
  selectionOption: string;
};

export type SELECT_CHECKBOX_TYPE = {
  color: COLORS;
  size: "small" | "wide";
  onCheckboxSelect: (arg: SELECT_BOX_ARG) => void;
  value: string;
  quizTopic: string;
  id: string;
  isChecked: boolean;
};
