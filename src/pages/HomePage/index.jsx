import React, { useContext, useState } from "react";
import { SafeAreaView, View, FlatList, Pressable, Text } from "react-native";
import { PokemonContext } from "../../components/PokemonContext";
import Logo from "../../components/Logo";
import InputContainer from "../../components/Form/InputContainer";
import FilterContainer from "../../components/Form/FilterContainer";
import styles from "./style";

async function getPokemonData(pokemon) {
    const pokedex = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    );
    const pokemonData = await pokedex.json();
    return pokemonData;
}

async function getPokemonType(type) {
    const poketype = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const typeData = await poketype.json();
    const pokemonType = typeData.pokemon;
    return pokemonType;
}

export default function HomePage({ navigation }) {
    const [pokemonInput, setPokemonInput] = useContext(PokemonContext);
    const [pokemonsList, setPokemonsList] = useState([]);
    const [pokemonUnique, setPokemonUnique] = useState("");

    function searchButton() {
        getPokemonData(pokemonInput).then((pokemonData) => {
            setPokemonsList([]);
            setPokemonUnique(pokemonData);
        });
    }

    function queryType(type) {
        getPokemonType(type).then((pokemonType) => {
            setPokemonUnique("");
            setPokemonsList(pokemonType);
        });
    }

    return (
        <SafeAreaView style={styles.home__container}>
            <Logo />
            <View style={styles.form__container}>
                <InputContainer onSearch={searchButton} />
                <FilterContainer onQuery={queryType} />
            </View>
            {pokemonUnique ? (
                <Pressable>
                    <Text>{pokemonUnique.name}</Text>
                </Pressable>
            ) : (
                <FlatList
                    data={pokemonsList}
                    renderItem={({ item }) => {
                        return (
                            <Pressable>
                                <Text>{item.pokemon.name}</Text>
                            </Pressable>
                        );
                    }}
                    keyExtractor={(item) => item.name}
                />
            )}
        </SafeAreaView>
    );
}
