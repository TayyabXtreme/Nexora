"use client";

import { z } from "zod";
import { useRouter } from "next/navigation";
import { formOptions } from "@tanstack/react-form";

import { useAppForm } from "@/hooks/use-app-form";
import { toast } from "@/components/ui/toast";



const ttsFormSchema = z.object({
  text: z.string().min(1, "Please enter some text"),
  voiceId: z.string().min(1, "Please select a voice"),
  temperature: z.number(),
  topP: z.number(),
  topK: z.number(),
  repetitionPenalty: z.number(),
});


export type TTSFormValues = z.infer<typeof ttsFormSchema>;


export const defaultTTSValues: TTSFormValues = {
  text: "",
  voiceId: "",
  temperature: 0.8,
  topP: 0.95,
  topK: 1000,
  repetitionPenalty: 1.2,
};


export const ttsFormOptions = formOptions({
  defaultValues: defaultTTSValues,
});



export function TextToSpeechForm({
  children,
  defaultValues,
}: {
  children: React.ReactNode;
  defaultValues?: TTSFormValues;
}) {
  const router = useRouter();



  const form = useAppForm({
    ...ttsFormOptions,
    defaultValues: defaultValues ?? defaultTTSValues,
    validators: {
      onSubmit: ttsFormSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const data = {id:'123'}
        // await createMutation.mutateAsync({
        //   text: value.text.trim(),
        //   voiceId: value.voiceId,
        //   temperature: value.temperature,
        //   topP: value.topP,
        //   topK: value.topK,
        //   repetitionPenalty: value.repetitionPenalty,
        // });
        
        toast.add({title:"Audio generated successfully!"});
        router.push(`/text-to-speech/${data.id}`);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Failed to generate audio";

        if (message === "SUBSCRIPTION_REQUIRED") {
          toast.add({
            type: "error",
            title:"Subscription required",
            actionProps: {
              children: "Subscribe",
              onClick: () => {},
            },
          });
        } else {
          toast.add({ type: "error",title:"Error", description: message});
        }
      }
    },
  });

  return <form.AppForm>{children}</form.AppForm>;
};