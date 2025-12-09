// filepath: /home/jolantawro/workspace/Next/first-class/first-class-edu/lib/data/combined-words.ts

import { wordExercises as alphabetExercises } from './alphabet-letter';
import { LetterType } from '../../types/reading';

// Re-export the LetterType
export type { LetterType };

// Combine both exercise sets
export const wordExercises: LetterType[] = [
  ...alphabetExercises
];