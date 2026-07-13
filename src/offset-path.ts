export const offsetPath = ({ matchUtilities, theme }: any) => {
  matchUtilities(
    {
      "offset-path": (value: string) => ({
        "offset-path": value,
      }),
    },
    {
      values: theme("offsetPath"),
      type: ["any", "url", "position"],
    }
  );
};
