import React, { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { PokemonContext } from "../../PokemonContext";
import styles from "./style";

export default function InputContainer({onSearch}) {
    const [pokemonInput, setPokemonInput] = useContext(PokemonContext);

    return (
        <View style={styles.input__container}>
            <Text style={styles.input__label}>
                Pokemon or ID
                <Text style={styles.input__labelMax}> (máx: 898)</Text>
            </Text>
            <View style={styles.input__area}>
                <TextInput
                    onChangeText={setPokemonInput}
                    value={pokemonInput}
                    style={styles.input}
                    placeholder="Ex: bulbasaur or 1"
                />
                <TouchableOpacity
                    style={styles.input__button}
                    onPress={onSearch}
                >
                    <FontAwesome name="search" size={28} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
