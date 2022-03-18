import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    info__container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 40 : 0,
        backgroundColor: "#fff",
    },
    sprite__container: {
        alignItems: "center",
        width: "100%",
        marginVertical: 30,
    },
    pokemon__sprite: {
        width: 300,
        height: 300,
    },
    pokemon__container: {
        width: "100%",
        alignItems: "center",
    },
    pokemon__name: {
        fontSize: 24,
        fontWeight: "bold",
    },
    pokemon__id: {
        fontSize: 24,
        fontWeight: "bold",
    },
    pokemon__label: {
        fontSize: 20,
    },
});

export default styles;