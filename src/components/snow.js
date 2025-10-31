import React, { useMemo } from "react";

export default function Snow({ flakes = 80 }) {
  const items = useMemo(
    () =>
      Array.from({ length: flakes }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 8,
        size: 2 + Math.random() * 4,
      })),
    [flakes]
  );

  return (
    <div className="snow" aria-hidden="true">
      {items.map((f, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${f.left}%`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
}
