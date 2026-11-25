
"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export default function AnalyticsTracker() {
  const initialized = useRef(false);
  const viewedSections = useRef(new Set<string>());

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      void trackEvent("page_view");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target.id;

          if (
            entry.isIntersecting &&
            section &&
            !viewedSections.current.has(section)
          ) {
            viewedSections.current.add(section);

            void trackEvent("section_view", {
              section,
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));

    let activeSeconds = 0;

    function flushTime() {
      if (activeSeconds > 0) {
        void trackEvent("time_spent", {
          seconds: activeSeconds,
        });

        activeSeconds = 0;
      }
    }

    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        activeSeconds++;
      }

      if (activeSeconds >= 15) {
        flushTime();
      }
    }, 1000);

    function handleVisibility() {
      if (document.visibilityState === "hidden") {
        flushTime();
      }
    }

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    window.addEventListener("pagehide", flushTime);

    return () => {
      observer.disconnect();
      window.clearInterval(timer);

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );

      window.removeEventListener(
        "pagehide",
        flushTime
      );
    };
  }, []);

  return null;
}
