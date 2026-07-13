export const offsetPath = ({ matchUtilities, theme }) => {
    matchUtilities({
        "offset-path": (value) => ({
            "offset-path": value,
        }),
    }, {
        values: theme("offsetPath"),
        type: ["any", "url", "position"],
    });
};
