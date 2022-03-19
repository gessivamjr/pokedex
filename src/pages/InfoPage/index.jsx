import React, { useEffect, useContext } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
} from "react-native";
import { PokemonContext } from "../../components/Contexts";
import Logo from "../../components/Logo";
import TypeInfo from "../../components/TypeInfo";
import { getPokemon } from "../HomePage";
import styles from "./style";

export default function InfoPage({ route }) {
    const [pokemonResult, setPokemonResult] = useContext(PokemonContext);
    const typesList = pokemonResult.types;
    const nameParams = route.params.name;

    useEffect(() => {
        getPokemon(nameParams).then((pokemonData) =>
            setPokemonResult(pokemonData)
        );
    }, []);

    return (
        <SafeAreaView style={styles.info__container}>
            <Logo />
            <View style={styles.sprite__container}>
                <Image
                    style={styles.pokemon__sprite}
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonResult.id}.png`,
                    }}
                />
            </View>
            <View style={styles.pokemon__container}>
                <Text style={styles.pokemon__label}>
                    Name:{" "}
                    <Text style={styles.pokemon__name}>
                        {pokemonResult.name}
                    </Text>
                </Text>
                <Text style={styles.pokemon__label}>
                    ID:{" "}
                    <Text style={styles.pokemon__id}>{pokemonResult.id}</Text>
                </Text>
                <FlatList
                    data={typesList}
                    renderItem={({item}) => {
                        return (
                            <TypeInfo name={item.type.name}/>
                        );
                    }}
                    keyExtractor={(item) => item.type.name}
                    horizontal
                />
            </View>
        </SafeAreaView>
    );
}
