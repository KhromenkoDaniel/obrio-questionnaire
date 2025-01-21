'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import questionnaireData from '@/configs/questionnaire.json';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const firstQuestionId = questionnaireData.questions?.[0]?.id;
    console.log(
      questionnaireData.questions?.[0]?.id,
      'questionnaireData.questions?.[0]?.id',
    );
    if (firstQuestionId) {
      router.push(`/${firstQuestionId}`);
    } else {
      console.error('No questions found in the configuration.');
    }
  }, [router]);

  return null;
}
