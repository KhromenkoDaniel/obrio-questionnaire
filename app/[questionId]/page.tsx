import ScreenType from '@/components/ScreenTypes';
import questionnaireData from '@/configs/questionnaire.json';
import { Params, Question } from '@/types/questionnaire';

export default function ScreenTypePage({ params }: { params: Params }) {
  const question = questionnaireData.questions.find(
    (q) => q.id === params.questionId,
  ) as Question;

  if (!question) {
    return <div>Question not found</div>;
  }

  return <ScreenType question={question} />;
}

export async function generateStaticParams() {
  return questionnaireData.questions.map((question) => ({
    questionId: question.id,
  }));
}
