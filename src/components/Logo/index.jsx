import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function Logo() {
    return (
        <View style={styles.logo__container}>
            <Image
                source={require("../../assets/pokemonlogo.png")}
                style={styles.logo}
            />
        </View>
    );
}
