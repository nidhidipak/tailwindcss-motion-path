export const offsetAnchor = ({ matchUtilities, theme }) => {
    matchUtilities({
        "offset-anchor": (value) => ({
            "offset-anchor": value,
        }),
    }, {
        values: theme("offsetAnchor"),
        type: ["position", "any"],
    });
};
