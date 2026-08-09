import { use } from "react";

import { TextToSpeechDetailView } from "@/features/text-to-speech/views/text-to-speech-detail-view";
import { trpc, HydrateClient, prefetch } from "@/trpc/server";

export default function TextToSpeechDetailPage({
  params,
}: {
  params: Promise<{ generationId: string }>;
}) {
  const { generationId } = use(params);

  prefetch(trpc.generations.getById.queryOptions({ id: generationId }));
  prefetch(trpc.voices.getAll.queryOptions());
  prefetch(trpc.generations.getAll.queryOptions());

  return (
    <HydrateClient>
      <TextToSpeechDetailView generationId={generationId} />
    </HydrateClient>
  );
};