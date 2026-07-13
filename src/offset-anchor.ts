export const offsetAnchor = ({ matchUtilities, theme }: any) => {
  matchUtilities(
    {
      "offset-anchor": (value: string) => ({
        "offset-anchor": value,
      }),
    },
    {
      values: theme("offsetAnchor"),
      type: ["position", "any"],
    }
  );
};
