export type Question = {
  id: string;
  question: string;
  createdAt: Date;
}

export type Answer = {
  id: string;
  questionId: string;
  answer: string;
  createdAt: Date;
}