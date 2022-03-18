import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./style";

export default function TypeInfo({ name }) {
    const types = [styles.type__button];
    if (name === "bug") {
        types.push(styles.bug);
    }
    if (name === "electric") {
        types.push(styles.electric);
    }
    if (name === "fire") {
        types.push(styles.fire);
    }
    if (name === "grass") {
        types.push(styles.grass);
    }
    if (name === "normal") {
        types.push(styles.normal);
    }
    if (name === "rock") {
        types.push(styles.rock);
    }
    if (name === "dark") {
        types.push(styles.dark);
    }
    if (name === "fairy") {
        types.push(styles.fairy);
    }
    if (name === "flying") {
        types.push(styles.flying);
    }
    if (name === "ground") {
        types.push(styles.ground);
    }
    if (name === "poison") {
        types.push(styles.poison);
    }
    if (name === "steel") {
        types.push(styles.steel);
    }
    if (name === "dragon") {
        types.push(styles.dragon);
    }
    if (name === "fighting") {
        types.push(styles.fighting);
    }
    if (name === "ghost") {
        types.push(styles.ghost);
    }
    if (name === "ice") {
        types.push(styles.ice);
    }
    if (name === "psychic") {
        types.push(styles.psychic);
    }
    if (name === "water") {
        types.push(styles.water);
    }
    return (
        <Pressable disabled={true} style={types}>
            <Text style={styles.type__label}>{name}</Text>
        </Pressable>
    );
}
