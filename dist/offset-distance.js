export const offsetDistance = ({ matchUtilities, theme }) => {
    matchUtilities({
        "offset-distance": (value) => ({
            "offset-distance": value,
        }),
    }, {
        values: theme("offsetDistance"),
        type: ["length", "percentage", "any"],
    });
};
