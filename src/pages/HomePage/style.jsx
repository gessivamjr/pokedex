import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    home__container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 40 : 0,
        backgroundColor: "#f6f6f6",
    },
    form__container: {
        alignItems: "center",
        width: "100%",
    },
});

export default styles;
