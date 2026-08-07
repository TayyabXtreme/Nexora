import { Headphones, ThumbsUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "sticky top-0 z-20 border-b border-border/60 bg-background/85 px-3 py-3 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65 sm:px-4",
        className
      )}
    >
      <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-background via-background to-muted/40 px-3 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.04)] sm:px-4">
        <div className="flex items-start gap-3">
          <SidebarTrigger className="shrink-0 rounded-full border border-border/60 bg-background shadow-sm" />
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Workspace
            </p>
            <h1 className="mt-0.5 truncate text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {title}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Quick access to your tools and support.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-end gap-2 sm:gap-3">
        <Button
          variant="outline"
          size="sm"
          nativeButton={false}
          render={<a href="mailto:business@tayyabxtrem.com" />}
          className="h-9 rounded-full border-border/70 bg-background/80 px-3 shadow-sm"
        >
          <ThumbsUp />
          <span className="hidden lg:block">Feedback</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          nativeButton={false}
          render={<a href="mailto:business@tayyabxtrem.com" />}
          className="h-9 rounded-full border-border/70 bg-background/80 px-3 shadow-sm"
        >
          <Headphones />
          <span className="hidden lg:block">Need help?</span>
        </Button>
      </div>
    </div>
  );
}
