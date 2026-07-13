export const offsetPosition = ({ matchUtilities, theme }) => {
    matchUtilities({
        "offset-position": (value) => ({
            "offset-position": value,
        }),
    }, {
        values: theme("offsetPosition"),
        type: ["position", "any"],
    });
};
