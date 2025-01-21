'use client';

import { useEffect } from 'react';

import InformationalScreen from '@/components/ScreenTypes/InformationalScreen';
import SingleChoiceQuestion from '@/components/ScreenTypes/SingleChoiceQuestion';
import {
  selectIsGradientTheme,
  setTheme,
} from '@/lib/features/theme/themeSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import styles from '@/styles/pages/Question.module.scss';
import { Question } from '@/types/questionnaire';

function ScreenType({ question }: { question: Question }) {
  const isDefaultTheme = useAppSelector(selectIsGradientTheme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (question.screenType === 'info') {
      dispatch(setTheme('gradient'));
    } else {
      dispatch(setTheme('default'));
    }
  }, [question.screenType, dispatch]);

  const wrapperClassName = isDefaultTheme
    ? styles.defaultBackground
    : styles.gradientBackground;

  return (
    <div className={`${styles.wrapper} ${wrapperClassName}`}>
      <div className={styles.container}>
        {(() => {
          switch (question.screenType) {
            case 'singleChoice':
              return <SingleChoiceQuestion question={question} />;
            case 'info':
              return <InformationalScreen question={question} />;
            default:
              console.warn('Invalid screenType');
              return <div>Invalid screen type</div>;
          }
        })()}
      </div>
    </div>
  );
}

export default ScreenType;
