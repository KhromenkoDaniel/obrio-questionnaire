export type Answer = {
  id: number;
  name: string;
  reference: string | null;
};

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
  answers?: Answer[];
  theme?: string;
  nextScreenId?: string;
};

export type Questionnaire = {
  id: string;
  title: string;
  questions: Question[];
};

export type Params = {
  questionId: string;
};

export type QuestionRendererProps = {
  question: Question;
  onNextQuestion: (answer: Answer) => void;
};
