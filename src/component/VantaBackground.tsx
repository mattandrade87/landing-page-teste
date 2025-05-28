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
      color: 0x150ae8,
      backgroundColor: 0x000000,
      spacing: 1.5,
      chaos: 2.0,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []); // Removido vantaEffect da dependência

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        zIndex: -1,
      }}
    />
  );
}
