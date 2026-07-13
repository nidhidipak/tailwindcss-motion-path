export const offsetPosition = ({ matchUtilities, theme }: any) => {
  matchUtilities(
    {
      "offset-position": (value: string) => ({
        "offset-position": value,
      }),
    },
    {
      values: theme("offsetPosition"),
      type: ["position", "any"],
    }
  );
};
