import plugin from "tailwindcss/plugin.js";

export default plugin(({ matchUtilities }) => {
  matchUtilities(
    {
      "offset-path": (value) => ({
        offsetPath: value,
      }),
    },
    {
      type: "any",
    }
  );
});
