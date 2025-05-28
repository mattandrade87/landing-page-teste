// src/components/VantaBackground.tsx
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      TRUNK: (config: any) => any;
    };
  }
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    const effect = window.VANTA.TRUNK({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x9e00ff,
      backgroundColor: 0x000000,
      spacing: 1.5,
      chaos: 2.0,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
}
