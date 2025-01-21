'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Response } from '@/types/questionnaire';
import { loadStateFromLocalStorage } from '@/utils/loadStateFromLocalStorage';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const responses: Response[] =
      typeof window !== 'undefined'
        ? loadStateFromLocalStorage<Response[]>('responses') || []
        : [];

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
  }, [router]);

  return null;
}
