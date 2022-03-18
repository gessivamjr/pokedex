import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button__container: {
        marginTop: 10,
    },
    button__line: {
        flexDirection: "row",
    },
    button__lineLast: {
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        alignItems: "center",
        margin: 5,
        width: 75,
        padding: 5,
        borderColor: "rgba(0, 0, 0, 0.75)",
        borderWidth: 1,
        borderRadius: 25,
    },
    button__label: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    bug: { backgroundColor: "#A9B91F" },
    electric: { backgroundColor: "#FDC63D" },
    fire: { backgroundColor: "#E93B0C" },
    grass: { backgroundColor: "#61B725" },
    normal: { backgroundColor: "#C5C1BA" },
    rock: { backgroundColor: "#BAA257" },
    dark: { backgroundColor: "#503B2D" },
    fairy: { backgroundColor: "#F5B0F5" },
    flying: { backgroundColor: "#A5B3F6" },
    ground: { backgroundColor: "#D4B257" },
    poison: { backgroundColor: "#8C3F8E" },
    steel: { backgroundColor: "#B9B9C6" },
    dragon: { backgroundColor: "#755DDE" },
    fighting: { backgroundColor: "#622512" },
    ghost: { backgroundColor: "#6667B5" },
    ice: { backgroundColor: "#77D6F7" },
    psychic: { backgroundColor: "#ED447E" },
    water: { backgroundColor: "#2E8FF1" },
});

export default styles;
