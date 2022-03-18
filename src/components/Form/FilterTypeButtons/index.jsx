import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

const Button = ({ label, onQuery }) => {
    const stylesButtons = [styles.button];
    if (label === "bug") {
        stylesButtons.push(styles.bug);
    }
    if (label === "electric") {
        stylesButtons.push(styles.electric);
    }
    if (label === "fire") {
        stylesButtons.push(styles.fire);
    }
    if (label === "grass") {
        stylesButtons.push(styles.grass);
    }
    if (label === "normal") {
        stylesButtons.push(styles.normal);
    }
    if (label === "rock") {
        stylesButtons.push(styles.rock);
    }
    if (label === "dark") {
        stylesButtons.push(styles.dark);
    }
    if (label === "fairy") {
        stylesButtons.push(styles.fairy);
    }
    if (label === "flying") {
        stylesButtons.push(styles.flying);
    }
    if (label === "ground") {
        stylesButtons.push(styles.ground);
    }
    if (label === "poison") {
        stylesButtons.push(styles.poison);
    }
    if (label === "steel") {
        stylesButtons.push(styles.steel);
    }
    if (label === "dragon") {
        stylesButtons.push(styles.dragon);
    }
    if (label === "fighting") {
        stylesButtons.push(styles.fighting);
    }
    if (label === "ghost") {
        stylesButtons.push(styles.ghost);
    }
    if (label === "ice") {
        stylesButtons.push(styles.ice);
    }
    if (label === "psychic") {
        stylesButtons.push(styles.psychic);
    }
    if (label === "water") {
        stylesButtons.push(styles.water);
    }

    return (
        <TouchableOpacity style={stylesButtons} onPress={() => onQuery(label)}>
            <Text style={styles.button__label}>{label}</Text>
        </TouchableOpacity>
    );
};

export default function FilterTypeButtons({ onQuery }) {
    return (
        <View style={styles.button__container}>
            <View style={styles.button__line}>
                <Button label={"bug"} onQuery={onQuery} />
                <Button label={"electric"} onQuery={onQuery} />
                <Button label={"fire"} onQuery={onQuery} />
                <Button label={"grass"} onQuery={onQuery} />
                <Button label={"normal"} onQuery={onQuery} />
            </View>
            <View style={styles.button__line}>
                <Button label={"rock"} onQuery={onQuery} />
                <Button label={"dark"} onQuery={onQuery} />
                <Button label={"fairy"} onQuery={onQuery} />
                <Button label={"flying"} onQuery={onQuery} />
                <Button label={"ground"} onQuery={onQuery} />
            </View>
            <View style={styles.button__line}>
                <Button label={"poison"} onQuery={onQuery} />
                <Button label={"steel"} onQuery={onQuery} />
                <Button label={"dragon"} onQuery={onQuery} />
                <Button label={"fighting"} onQuery={onQuery} />
                <Button label={"ghost"} onQuery={onQuery} />
            </View>
            <View style={styles.button__lineLast}>
                <Button label={"ice"} onQuery={onQuery} />
                <Button label={"psychic"} onQuery={onQuery} />
                <Button label={"water"} onQuery={onQuery} />
            </View>
        </View>
    );
}
