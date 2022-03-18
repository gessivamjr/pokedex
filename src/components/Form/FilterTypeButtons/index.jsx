import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

const Button = ({
    label,
    bug,
    electric,
    fire,
    grass,
    normal,
    rock,
    dark,
    fairy,
    flying,
    ground,
    poison,
    steel,
    dragon,
    fighting,
    ghost,
    ice,
    psychic,
    water,
    onQuery,
}) => {
    const stylesButtons = [styles.button];
    if (bug) {
        stylesButtons.push(styles.bug);
    }
    if (electric) {
        stylesButtons.push(styles.electric);
    }
    if (fire) {
        stylesButtons.push(styles.fire);
    }
    if (grass) {
        stylesButtons.push(styles.grass);
    }
    if (normal) {
        stylesButtons.push(styles.normal);
    }
    if (rock) {
        stylesButtons.push(styles.rock);
    }
    if (dark) {
        stylesButtons.push(styles.dark);
    }
    if (fairy) {
        stylesButtons.push(styles.fairy);
    }
    if (flying) {
        stylesButtons.push(styles.flying);
    }
    if (ground) {
        stylesButtons.push(styles.ground);
    }
    if (poison) {
        stylesButtons.push(styles.poison);
    }
    if (steel) {
        stylesButtons.push(styles.steel);
    }
    if (dragon) {
        stylesButtons.push(styles.dragon);
    }
    if (fighting) {
        stylesButtons.push(styles.fighting);
    }
    if (ghost) {
        stylesButtons.push(styles.ghost);
    }
    if (ice) {
        stylesButtons.push(styles.ice);
    }
    if (psychic) {
        stylesButtons.push(styles.psychic);
    }
    if (water) {
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
                <Button label={"bug"} bug onQuery={onQuery}/>
                <Button label={"electric"} electric onQuery={onQuery}/>
                <Button label={"fire"} fire onQuery={onQuery}/>
                <Button label={"grass"} grass onQuery={onQuery}/>
                <Button label={"normal"} normal onQuery={onQuery}/>
            </View>
            <View style={styles.button__line}>
                <Button label={"rock"} rock onQuery={onQuery}/>
                <Button label={"dark"} dark onQuery={onQuery}/>
                <Button label={"fairy"} fairy onQuery={onQuery}/>
                <Button label={"flying"} flying onQuery={onQuery}/>
                <Button label={"ground"} ground onQuery={onQuery}/>
            </View>
            <View style={styles.button__line}>
                <Button label={"poison"} poison onQuery={onQuery}/>
                <Button label={"steel"} steel onQuery={onQuery}/>
                <Button label={"dragon"} dragon onQuery={onQuery}/>
                <Button label={"fighting"} fighting onQuery={onQuery}/>
                <Button label={"ghost"} ghost onQuery={onQuery}/>
            </View>
            <View style={styles.button__lineLast}>
                <Button label={"ice"} ice onQuery={onQuery}/>
                <Button label={"psychic"} psychic onQuery={onQuery}/>
                <Button label={"water"} water onQuery={onQuery}/>
            </View>
        </View>
    );
}
