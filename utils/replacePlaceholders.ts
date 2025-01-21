import { Response } from '@/types/questionnaire';

export const replacePlaceholders = (
  text: string,
  placeholders: Record<string, any>,
  responses: Response[],
): string => {
  return text.replace(/\{(\w+)\}/g, (match, key) => {
    const placeholder = placeholders[key];

    if (!placeholder) {
      console.warn(`No matching placeholder found for: ${key}`);
      return match;
    }

    if (typeof placeholder === 'string') {
      return responses.find((res) => res.reference === placeholder)?.name;
    }

    if (typeof placeholder === 'object' && placeholder.condition) {
      const isConditionMet = responses.find(
        (res) => res.id === placeholder.condition,
      );
      return isConditionMet
        ? placeholder.valueIfTrue
        : placeholder.valueIfFalse;
    }

    console.warn(`Unhandled placeholder type for key: ${key}`);
    return match;
  });
};
