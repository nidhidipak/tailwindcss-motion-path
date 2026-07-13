export const offsetRotate = ({ matchUtilities, theme }: any) => {
  matchUtilities(
    {
      "offset-rotate": (value: string) => ({
        "offset-rotate": value,
      }),
    },
    {
      values: theme("offsetRotate"),
      type: ["angle", "any"],
    }
  );
};
