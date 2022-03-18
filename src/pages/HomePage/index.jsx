import React, { useContext, useState } from "react";
import { SafeAreaView, View, FlatList, Pressable, Text } from "react-native";
import { PokemonContext } from "../../components/PokemonContext";
import Logo from "../../components/Logo";
import InputContainer from "../../components/Form/InputContainer";
import FilterContainer from "../../components/Form/FilterContainer";
import styles from "./style";

async function getPokemon(pokemon) {
    const pokedex = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    );
    const pokemonData = await pokedex.json();
    return pokemonData;
}

async function getPokemonTypeList(type) {
    const poketype = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const typeData = await poketype.json();
    const pokemonTypeList = typeData.pokemon;
    return pokemonTypeList;
}

export default function HomePage({ navigation }) {
    const [pokemonInput, setPokemonInput] = useContext(PokemonContext);
    const [pokemonsList, setPokemonsList] = useState([]);
    const [pokemonUnique, setPokemonUnique] = useState("");

    function searchButton() {
        getPokemon(pokemonInput).then((pokemonData) => {
            setPokemonsList([]);
            setPokemonUnique(pokemonData);
        });
    }

    function queryType(type) {
        getPokemonTypeList(type).then((pokemonTypeList) => {
            setPokemonUnique("");
            setPokemonsList(pokemonTypeList);
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
                <>
                    <Text style={styles.item__title}>Pokemon:</Text>
                    <Pressable
                        style={styles.item__card}
                        onPress={() =>
                            navigation.push("About", {
                                name: pokemonUnique.name,
                            })
                        }
                    >
                        <Text style={styles.item__label}>
                            {pokemonUnique.name}
                        </Text>
                    </Pressable>
                </>
            ) : (
                <>
                    <Text style={styles.item__title}>Pokemons:</Text>
                    <FlatList
                        data={pokemonsList}
                        renderItem={({ item }) => {
                            return (
                                <Pressable
                                    style={styles.item__card}
                                    onPress={() =>
                                        navigation.push("About", {
                                            name: item.pokemon.name,
                                        })
                                    }
                                >
                                    <Text style={styles.item__label}>
                                        {item.pokemon.name}
                                    </Text>
                                </Pressable>
                            );
                        }}
                        keyExtractor={(item) => item.pokemon.name}
                    />
                </>
            )}
        </SafeAreaView>
    );
}
