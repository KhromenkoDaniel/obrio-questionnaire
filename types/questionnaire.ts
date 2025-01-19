export type Question = {
  id: string;
  screenType:
    | 'singleChoice'
    | 'multiChoice'
    | 'textInput'
    | 'dateInput'
    | 'info';
  question: string;
  subtitle?: string;
  options?: string[];
  next?: Record<string, string>;
  theme?: string;
};

export type Questionnaire = {
  id: string;
  title: string;
  questions: Question[];
};

export type Params = {
  questionId: string;
};
