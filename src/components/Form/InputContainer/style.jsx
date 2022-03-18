import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input__container: {
        alignItems: "center",
        width: "100%",
        marginBottom: 10,
    },
    input__label: {
        fontSize: 24,
        fontWeight: "bold",
    },
    input__labelMax: {
        fontSize: 16,
    },
    input__area: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
    },
    input: {
        width: "80%",
        marginBottom: 10,
        marginRight: 10,
        padding: 10,
        paddingLeft: 25,
        backgroundColor: "#fff",
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderWidth: 1,
        borderRadius: 25,
        fontSize: 22,
    },
    input__button: {
        marginBottom: 7.5,
    },
});

export default styles;
