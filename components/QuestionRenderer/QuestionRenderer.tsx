import { useState } from 'react';

import styles from '@/styles/components/QuestionRenderer.module.scss';
import { Question } from '@/types/questionnaire';

type QuestionRendererProps = {
  question: Question;
  onNextQuestion: (answer: string) => void;
};

function QuestionRenderer({ question, onNextQuestion }: QuestionRendererProps) {
  const isGradientTheme = question.theme === 'gradient';
  const [activeOption, setActiveOption] = useState<string | null>(null);

  const handleClick = (option: string) => {
    setActiveOption(option); // Set the active option
    onNextQuestion(option);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>{question.question}</h1>
        <p className={styles.subtitle}>{question.subtitle}</p>
        {question.options?.map((option) => (
          <button
            key={option}
            className={styles.button}
            data-active={activeOption === option}
            onClick={() => handleClick(option)}
          >
            <span className={isGradientTheme ? styles.gradient : ''}>
              {option}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionRenderer;
