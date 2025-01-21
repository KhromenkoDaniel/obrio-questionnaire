export type Response = {
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
  answers?: Response[];
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

export type SingleChoiceQuestionProps = {
  question: Question;
};

export type InformationalScreenProps = {
  question: Question;
  referenceID?: string | null;
};
