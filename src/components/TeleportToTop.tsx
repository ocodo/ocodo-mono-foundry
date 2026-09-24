import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TeleportToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    html.scrollTop = 0;
    document.body.scrollTop = 0;
    html.style.scrollBehavior = previous;
  }, [pathname]);

  return null;
}
