import React from "react";

const CableGraphic = () => {
  return (
    <section aria-hidden className="relative select-none">
      <div className="container mx-auto px-4">
        <svg
          viewBox="0 0 1200 160"
          className="w-full h-20 md:h-32 lg:h-40 text-muted-foreground/50"
          preserveAspectRatio="none"
        >
          {/* Decorative descending cable */}
          <path
            d="M50 10 C 300 120, 600 -40, 900 90 S 1150 140, 1180 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 6"
          />
          {/* Little connector dot */}
          <circle cx="50" cy="10" r="3" fill="currentColor" />
          <circle cx="1180" cy="20" r="3" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

export default CableGraphic;
