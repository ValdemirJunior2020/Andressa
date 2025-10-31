import React, { useMemo } from "react";

export default function Balloons({ count = 12 }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 10,
        size: 24 + Math.random() * 26,
        hue: Math.floor(Math.random() * 360),
      })),
    [count]
  );

  return (
    <div className="balloons" aria-hidden="true">
      {items.map((b, i) => (
        <div
          key={i}
          className="balloon"
          style={{
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            width: `${b.size}px`,
            height: `${b.size * 1.3}px`,
            "--h": b.hue,
          }}
        >
          <span className="string" />
        </div>
      ))}
    </div>
  );
}
