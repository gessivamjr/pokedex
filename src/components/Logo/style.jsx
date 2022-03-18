import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    logo__container: {
        alignItems: "center",
        marginBottom: 30,
    },
    logo: {
        width: Dimensions.get("screen").width,
        height: 150,
    },
});

export default styles;
