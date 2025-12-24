import { useState } from 'react';
import type { Question, Answer } from "@/types/types";

const fakeAvaReply = (input: string) => {
  if (!input.trim()) return "Can you try typing something?";
  if (input.toLowerCase().includes("react")) {
    return "Sounds like you're working with react! Do you want to React interview questions?";
  }
  if (input.toLowerCase().includes('interview')) {
    return "Let's practice! Tell me about a recent challenge you had at work and how you handle it.";
  }
  return `Interesting! You said: "${input}". Tell me more about that.`;
}

export function useChat() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const question: Question = {
      id: crypto.randomUUID(),
      question: text,
      createdAt: new Date()
    };
    setQuestions((prev) => [...prev, question]);
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      const replyText = fakeAvaReply(text);
      const answer: Answer = {
        id: crypto.randomUUID(),
        questionId: question.id,
        answer: replyText,
        createdAt: new Date()
      }
      setAnswers((prev) => [...prev, answer]);
    } catch (err) {
      const errorAnswer = {
        id: crypto.randomUUID(),
        questionId: question.id,
        answer: 'Something went wrong',
        createdAt: new Date()
      }
      setAnswers((prev) => [...prev, errorAnswer]);
    } finally {
      setIsLoading(false);
    }
  }
  return {
    questions,
    answers,
    isLoading,
    sendMessage
  }
}