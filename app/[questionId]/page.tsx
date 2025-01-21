import ScreenType from '@/components/ScreenTypes/ScreenType';
import questionnaireData from '@/configs/questionnaire.json';
import styles from '@/styles/pages/Question.module.scss';
import { Params, Question } from '@/types/questionnaire';

export default function ScreenTypePage({ params }: { params: Params }) {
  const question = questionnaireData.questions.find(
    (q) => q.id === params.questionId,
  ) as Question;

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ScreenType question={question} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return questionnaireData.questions.map((question) => ({
    questionId: question.id,
  }));
}
