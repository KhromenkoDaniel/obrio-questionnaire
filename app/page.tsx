'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { selectResponses } from '@/lib/features/survey/surveySelectors';
import { useAppSelector } from '@/lib/hooks';

export default function Home() {
  const router = useRouter();
  const responses = useAppSelector(selectResponses);

  useEffect(() => {
    if (responses.length > 0) {
      const lastResponse = responses.at(-1);
      if (lastResponse?.reference) {
        router.replace(`/${lastResponse.reference}`);
      } else {
        console.warn(
          'No valid reference found in responses. Redirecting to /q1.',
        );
        router.replace('/q1');
      }
    } else {
      router.replace('/q1');
    }
  }, [responses, router]);

  return null;
}
