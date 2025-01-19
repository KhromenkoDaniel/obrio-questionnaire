'use client';

import { useRouter } from 'next/navigation';

import QuestionRenderer from '@/components/QuestionRenderer';
import { Question, Params } from '@/types/questionnaire';
import { validateQuestionnaire } from '@/utils/validateQuestionnaire';

const questionnaire = validateQuestionnaire();

export default function QuestionPage({ params }: { params: Params }) {
  const router = useRouter();

  const question = questionnaire.questions.find(
    (q: Question) => q.id === params.questionId,
  );

  if (!question) {
    return <p>Question not found</p>;
  }

  const handleNext = (answer: string) => {
    const nextQuestionId = question.next?.[answer];
    if (nextQuestionId) {
      router.push(`/${nextQuestionId}`);
    }
  };

  console.log(question, 'question in page.tsx');
  console.log('params.questionId', params.questionId);

  return <QuestionRenderer question={question} onNextQuestion={handleNext} />;
}
