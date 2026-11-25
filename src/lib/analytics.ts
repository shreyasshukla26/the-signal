
type EventName =
  | "page_view"
  | "section_view"
  | "experience_click"
  | "clarity_interaction"
  | "time_spent"
  | "contact_submit"
  | "linkedin_click";

type EventData = {
  section?: string;
  company?: string;
  value?: number;
  seconds?: number;
};

function getSessionId(): string {
  let sessionId = sessionStorage.getItem(
    "signal_session_id"
  );

  if (!sessionId) {
    sessionId = crypto.randomUUID();

    sessionStorage.setItem(
      "signal_session_id",
      sessionId
    );
  }

  return sessionId;
}

export async function trackEvent(
  eventName: EventName,
  eventData: EventData = {}
) {
  if (typeof window === "undefined") return;

  try {
    await fetch("/api/analytics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId: getSessionId(),
        eventName,
        eventData,
      }),
      keepalive: true,
    });
  } catch {
    // Analytics failure should not interrupt the UI.
  }
}
