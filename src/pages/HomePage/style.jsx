import { StyleSheet, Dimensions, Platform } from "react-native";

const styles = StyleSheet.create({
    home__container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 40 : 0,
        alignItems: "center",
        backgroundColor: "#fff",
    },
    form__container: {
        alignItems: "center",
        width: "100%",
        padding: 10,
        borderTopColor: "#E6E6E6",
        borderBottomColor: "#E6E6E6",
        borderWidth: 15,
    },
    item__title: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 22,
        fontWeight: "bold",
    },
    item__card: {
        alignItems: "center",
        width: Dimensions.get("screen").width - 100,
        marginBottom: 10,
        padding: 5,
        borderWidth: 4,
        borderRadius: 25,
        borderColor: "#2a6db4",
        backgroundColor: "#FFCC04",        
    },
    item__label: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
    },
});

export default styles;
