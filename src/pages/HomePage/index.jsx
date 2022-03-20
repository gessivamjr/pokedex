import React, { useContext, useState } from "react";
import {
    SafeAreaView,
    View,
    FlatList,
    Pressable,
    Text,
    Keyboard,
} from "react-native";
import { PokemonInputContext, PokemonContext } from "../../components/Contexts";
import Logo from "../../components/Logo";
import InputContainer from "../../components/Form/InputContainer";
import FilterContainer from "../../components/Form/FilterContainer";
import styles from "./style";

export async function getPokemon(pokemon) {
    const pokedex = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    );
    const pokemonData = await pokedex.json();
    return pokemonData;
}

async function getPokemonTypeList(type) {
    const pokedextype = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const typeData = await pokedextype.json();
    const pokemonTypeListData = typeData.pokemon;
    return pokemonTypeListData;
}

export default function HomePage({ navigation }) {
    const [pokemonInput, setPokemonInput] = useContext(PokemonInputContext);
    const [pokemonsListResult, setPokemonsListResult] = useState([]);
    const [pokemonResult, setPokemonResult] = useContext(PokemonContext);
    const [errorMessage, setErrorMessage] = useState("");

    function searchButton() {
        if (pokemonInput !== "" && pokemonInput !== "0") {
            getPokemon(pokemonInput)
                .then((pokemonData) => {
                    setPokemonsListResult([]);
                    setPokemonInput("");
                    setErrorMessage("");
                    setPokemonResult(pokemonData);
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    if (error) {
                        setErrorMessage("Pokemon não encontrado");
                        setPokemonInput("");
                        setPokemonResult("");
                    }
                });
        } else {
            setPokemonInput("");
            setPokemonResult("");
            setErrorMessage("*Busca inválida");
        }
    }

    function queryType(type) {
        getPokemonTypeList(type).then((pokemonTypeListData) => {
            setPokemonResult("");
            setPokemonsListResult(pokemonTypeListData);
        });
    }

    return (
        <SafeAreaView style={styles.home__container}>
            <Pressable onPress={() => Keyboard.dismiss()}>
                <Logo />
                <View style={styles.form__container}>
                    <InputContainer
                        onSearch={searchButton}
                        errorMessage={errorMessage}
                    />
                    <FilterContainer onQuery={queryType} />
                </View>
            </Pressable>
            <Text style={styles.item__title}>Result:</Text>
            {pokemonResult ? (
                <>
                    <Pressable
                        style={styles.item__card}
                        onPress={() =>
                            navigation.push("About", {
                                name: pokemonResult.name,
                            })
                        }
                    >
                        <Text style={styles.item__label}>
                            {pokemonResult.name}
                        </Text>
                    </Pressable>
                </>
            ) : (
                <>
                    <FlatList
                        data={pokemonsListResult}
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
