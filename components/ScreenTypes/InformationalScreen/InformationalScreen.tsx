import Link from 'next/link';

import { selectResponses } from '@/lib/features/survey/surveySelectors';
import { selectIsGradientTheme } from '@/lib/features/theme/themeSlice';
import { useAppSelector } from '@/lib/hooks';
import styles from '@/styles/components/ScreenType.module.scss';
import { InformationalScreenProps } from '@/types/questionnaire';

function InformationalScreen({ question }: InformationalScreenProps) {
  const responses = useAppSelector(selectResponses);
  const isDefaultTheme = useAppSelector(selectIsGradientTheme);
  const lastResponse = responses.at(-1);

  const nextHref = lastResponse?.reference || '/q1';
  const textColorClassName = isDefaultTheme
    ? styles.defaultColor
    : styles.gradientColor;

  return (
    <>
      <h1 className={`${styles.title} ${textColorClassName}`}>
        {question.question}
      </h1>
      <p className={`${styles.subtitle} ${textColorClassName}`}>
        {question.subtitle}
      </p>
      <Link href={nextHref} className={styles.button}>
        <span>Next</span>
      </Link>
    </>
  );
}

export default InformationalScreen;
