"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { VoiceCreateForm } from "./voice-create-form";
import { Button } from "@/components/ui/button";

import { useCallback } from "react";
import { toast } from "@/components/ui/toast";
import { useCheckout } from "@/features/billing/hooks/use-checkout";


interface VoiceCreateDialogProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  triggerClassName?: string;
}

export function VoiceCreateDialog({
  children,
  open,
  onOpenChange,
  triggerClassName,
}: VoiceCreateDialogProps) {
  const isMobile = useIsMobile();
  const { checkout } = useCheckout();


  const handleError = useCallback(
    (message: string) => {
      if (message === "SUBSCRIPTION_REQUIRED") {
        toast.add({
            title: "Subscription required",
            description: "You need an active subscription to create a custom voice.",
            type: "error",
            actionProps: {
              children: "Subscribe",
              onClick: () => checkout(),
            },
        })
      } else {
        toast.add({
            title: "Error",
            description: message,
            type: "error",
        });
      }
    },
    [],
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        {children && <DrawerTrigger className={triggerClassName}>{children}</DrawerTrigger>}
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Create custom voice</DrawerTitle>
            <DrawerDescription>
              Upload or record an audio sample to add a new voice to your
              library.
            </DrawerDescription>
          </DrawerHeader>
          <VoiceCreateForm
            scrollable
            onError={handleError}
            footer={(submit) => (
              <DrawerFooter>
                {submit}
                <DrawerClose render={<Button variant="outline">Cancel</Button>}/>
                 
              </DrawerFooter>
            )}
          />
        </DrawerContent>
      </Drawer>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && <DialogTrigger className={triggerClassName}>{children}</DialogTrigger>}
      <DialogContent className="flex flex-col">
        <DialogHeader className="text-left">
          <DialogTitle>Create custom voice</DialogTitle>
          <DialogDescription>
            Upload or record an audio sample to add a new voice to your library.
          </DialogDescription>
        </DialogHeader>
        <VoiceCreateForm scrollable onError={handleError} />
      </DialogContent>
    </Dialog>
  );
};