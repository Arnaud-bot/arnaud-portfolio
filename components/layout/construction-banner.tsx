"use client";

import { useEffect, useState } from "react";
import { Construction, X } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

const STORAGE_KEY = "construction-banner-dismissed";

export function ConstructionBanner({
  dict,
}: {
  dict: Dictionary["constructionBanner"];
}) {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(localStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  if (dismissed) return null;

  function dismiss() {
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore — dismissal just won't persist across reloads
    }
  }

  return (
    <div className="flex items-center justify-center gap-3 bg-primary/10 px-4 py-2.5 text-center text-xs text-foreground sm:text-sm">
      <Construction className="hidden size-4 shrink-0 text-primary sm:block" aria-hidden />
      <p>{dict.message}</p>
      <button
        type="button"
        onClick={dismiss}
        aria-label={dict.dismiss}
        className="ms-1 shrink-0 rounded-full p-1 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
      >
        <X className="size-3.5" />
      </button>
    </div>
  );
}
