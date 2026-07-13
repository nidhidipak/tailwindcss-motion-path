export const offsetRotate = ({ matchUtilities, theme }) => {
    matchUtilities({
        "offset-rotate": (value) => ({
            "offset-rotate": value,
        }),
    }, {
        values: theme("offsetRotate"),
        type: ["angle", "any"],
    });
};
