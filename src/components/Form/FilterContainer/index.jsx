import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import FilterTypeButtons from "../FilterTypeButtons";
import styles from "./style";

export default function FilterContainer({ onQuery }) {
    return (
        <View style={styles.filter__container}>
            <Text style={styles.filter__label}>
                <FontAwesome name="filter" size={24} /> Filters:
            </Text>
            <FilterTypeButtons onQuery={onQuery}/>
        </View>
    );
}
