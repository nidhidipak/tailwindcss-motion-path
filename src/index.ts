import plugin from "tailwindcss/plugin.js";
import { offsetPath } from "./offset-path.js";
import { offsetDistance } from "./offset-distance.js";
import { offsetRotate } from "./offset-rotate.js";
import { offsetAnchor } from "./offset-anchor.js";
import { offsetPosition } from "./offset-position.js";

export default plugin(
  (api) => {
    const { matchUtilities } = api;

    offsetPath(api);
    offsetDistance(api);
    offsetRotate(api);
    offsetAnchor(api);
    offsetPosition(api);

    // Motion Duration Utilities
    matchUtilities(
      {
        "motion-duration": (value) => ({
          animationDuration: value,
        }),
      },
      { values: { "1": "1s", "2": "2s", "4": "4s", "8": "8s" } }
    );

    // Motion Delay Utilities
    matchUtilities(
      {
        "motion-delay": (value) => ({
          animationDelay: value,
        }),
      },
      { values: { "100": "100ms", "300": "300ms", "500": "500ms" } }
    );

    // Motion Repeat Utilities
    matchUtilities(
      {
        "motion-repeat": (value) => ({
          animationIterationCount: value,
        }),
      },
      { values: { "1": "1", "2": "2", infinite: "infinite" } }
    );
  },
  {
    theme: {
      extend: {
        offsetPath: {
          none: "none",
        },
        offsetDistance: {
          "0": "0%",
          "25": "25%",
          "50": "50%",
          "75": "75%",
          "100": "100%",
        },
        offsetRotate: {
          "0": "0deg",
          "45": "45deg",
          "90": "90deg",
          auto: "auto",
          reverse: "auto 180deg",
        },
        offsetAnchor: {
          center: "center",
          top: "top",
          left: "left",
          right: "right",
        },
        offsetPosition: {
          auto: "auto",
          center: "center",
        },
        keyframes: {
          motion: {
            from: { "offset-distance": "0%" },
            to: { "offset-distance": "100%" },
          },
        },
        animation: {
          // Standard infinite animations
          "motion": "motion 4s linear infinite",
          "motion-loop": "motion 4s ease-in-out infinite",
          "motion-reverse": "motion 4s linear infinite reverse",
          "motion-alternate": "motion 4s linear infinite alternate",
          "motion-alternate-reverse": "motion 4s linear infinite alternate-reverse",
          
          // Speed variations
          "motion-slow": "motion 8s linear infinite",
          "motion-fast": "motion 2s linear infinite",
          
          // Timing functions
          "motion-linear": "motion 4s linear infinite",
          "motion-ease": "motion 4s ease infinite",
          "motion-ease-in": "motion 4s ease-in infinite",
          "motion-ease-out": "motion 4s ease-out infinite",
          "motion-ease-in-out": "motion 4s ease-in-out infinite",
          
          // Special easing
          "motion-bounce": "motion 4s cubic-bezier(0.68, -0.55, 0.26, 1.55) infinite",
          "motion-elastic": "motion 4s cubic-bezier(0.68, -0.55, 0.26, 1.55) infinite", // Using bounce as fallback
          "motion-ping": "motion 1s cubic-bezier(0, 0, 0.2, 1) infinite",
          
          // Repetition
          "motion-once": "motion 4s linear",
          "motion-infinite": "motion 4s linear infinite",
          
          // Shapes
          "motion-orbit": "motion 4s linear infinite",
          "motion-circle": "motion 4s linear infinite",
          "motion-figure8": "motion 4s linear infinite",
        },
      },
    },
  }
);
