// filepath: /home/jolantawro/workspace/Next/first-class/first-class-edu/lib/data/combined-words.ts

import { wordExercises as alphabetExercises } from './alphabet-letter';
import { wordExercises as mixtureExercises } from './mixture-words';

export interface WordExercise {
  word: string;
  options: string[];
  correctIndex: number;
  image: string;
}

// Combine both exercise sets
export const wordExercises: WordExercise[] = [
  ...alphabetExercises,
  ...mixtureExercises
];