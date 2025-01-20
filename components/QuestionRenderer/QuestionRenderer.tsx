import styles from '@/styles/components/QuestionRenderer.module.scss';
import { QuestionRendererProps } from '@/types/questionnaire';

function QuestionRenderer({ question, onNextQuestion }: QuestionRendererProps) {
  if (question.screenType === 'info') {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>{question.question}</h1>
          <p className={styles.subtitle}>{question.subtitle}</p>
          <button
            className={styles.button}
            onClick={() =>
              onNextQuestion({
                id: -1,
                name: 'Next',
                reference: null,
              })
            }
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>{question.question}</h1>
        {question.answers?.map((answer) => (
          <button
            key={answer.id}
            className={styles.button}
            onClick={() => onNextQuestion(answer)}
          >
            <span>{answer.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionRenderer;
