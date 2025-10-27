import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop: when the location changes (pathname or hash) scroll the window to top.
// Also set history.scrollRestoration to 'manual' while the app is mounted so the SPA
// can control scroll position reliably.
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Prefer manual restoration so the browser doesn't try to restore previous scroll.
    if ('scrollRestoration' in window.history) {
      const prev = window.history.scrollRestoration;
      try {
        window.history.scrollRestoration = 'manual';
      } catch {}

      return () => {
        try {
          window.history.scrollRestoration = prev;
        } catch {}
      };
    }
    return undefined;
  }, []);

  // UseLayoutEffect so the scroll happens before the browser paints the new route.
  // This avoids briefly showing the previous scroll position on fast navigations.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
