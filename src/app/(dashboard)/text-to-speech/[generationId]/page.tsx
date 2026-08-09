import { redirect } from "next/navigation";
import { caller } from "@/trpc/server";

import { TextToSpeechDetailView } from "@/features/text-to-speech/views/text-to-speech-detail-view";

export default async function TextToSpeechDetailPage({
  params,
}: {
  params: Promise<{ generationId: string }>;
}) {
  const { generationId } = await params;

  const generation = await caller.generations.getById({ id: generationId }).catch(() => null);
  if (!generation) {
    redirect("/text-to-speech");
  }

  const voices = await caller.voices
    .getAll()
    .catch(() => ({ custom: [], system: [] }));

  return (
    <TextToSpeechDetailView generation={generation} voices={voices} />
  );
};