import { useEffect, useState, type ReactNode } from "react";
import FontLoadingScreen from "@/components/FontLoadingScreen";

interface FontLoaderProps {
  children: ReactNode;
}

const fonts = [
  "100 1em 'Ocodo Mono'",
  "300 1em 'Ocodo Mono'",
  "100 1em 'Ocodo Mono DotZero'",
  "300 1em 'Ocodo Mono DotZero'",
];

export default function FontLoader({ children }: FontLoaderProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    Promise.all(fonts.map((font) => document.fonts.load(font)))
      .then(() => {
        if (!cancelled) {
          setReady(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setReady(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) {
    return <FontLoadingScreen />;
  }

  return children;
}
