import type { Metadata } from "next";
import { caller } from "@/trpc/server";
import { TextToSpeechView } from '@/features/text-to-speech/views/text-to-speech-view';

export const metadata: Metadata = { title: "Text to Speech" };

export default async function TextToSpeechPage({
  searchParams,
}: {
  searchParams: Promise<{ text?: string; voiceId?: string }>;
}) {
  const { text, voiceId } = await searchParams;
  const voices = await caller.voices
    .getAll()
    .catch(() => ({ custom: [], system: [] }));

  return (
    <TextToSpeechView 
      initialValues={{ text, voiceId }} 
      voices={voices}
    />
  );
}
