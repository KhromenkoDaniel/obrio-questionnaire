'use client';

import InformationalScreen from '@/components/ScreenTypes/InformationalScreen';
import SingleChoiceQuestion from '@/components/ScreenTypes/SingleChoiceQuestion';
import { Question } from '@/types/questionnaire';

function ScreenType({ question }: { question: Question }) {
  switch (question.screenType) {
    case 'singleChoice':
      return <SingleChoiceQuestion question={question} />;
    case 'info':
      return <InformationalScreen question={question} />;
    default:
      console.warn('Invalid screenType');
      return <div>Invalid screen type</div>;
  }
}

export default ScreenType;
