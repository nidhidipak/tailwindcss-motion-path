export const offsetDistance = ({ matchUtilities, theme }: any) => {
  matchUtilities(
    {
      "offset-distance": (value: string) => ({
        "offset-distance": value,
      }),
    },
    {
      values: theme("offsetDistance"),
      type: ["length", "percentage", "any"],
    }
  );
};
