// src/lib/ga.ts
export const GA_TRACKING_ID =
  process.env.NEXT_PUBLIC_GA_ID ?? "G-E4VHV3GV58";

type GtagConfig = {
  page_path?: string;
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
};

type GtagFn = {
  (command: "js", date: Date): void;
  (command: "config", targetId: string, config?: GtagConfig): void;
  (command: "event", eventName: string, params?: GtagConfig): void;
};

function getGtag(): GtagFn | undefined {
  if (typeof window === "undefined") return undefined;
  const g = (window as unknown as { gtag?: unknown }).gtag;
  return typeof g === "function" ? (g as GtagFn) : undefined;
}

export function pageview(url: string): void {
  const gtag = getGtag();
  if (!gtag) return;
  gtag("config", GA_TRACKING_ID, { page_path: url });
}

export function event(params: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}): void {
  const gtag = getGtag();
  if (!gtag) return;
  gtag("event", params.action, {
    event_category: params.category,
    event_label: params.label,
    value: params.value,
  });
}
