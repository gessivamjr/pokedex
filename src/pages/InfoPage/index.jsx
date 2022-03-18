import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
} from "react-native";
import Logo from "../../components/Logo";
import TypeInfo from "../../components/TypeInfo";
import styles from "./style";

async function getParamsData(pokemon) {
    const params = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    const paramsData = await params.json();
    return paramsData;
}

export default function InfoPage({ route }) {
    const [paramsPokemon, setParamsPokemon] = useState("");
    const nameProps = route.params.name;
    const typesList = paramsPokemon.types;

    useEffect(() => {
        getParamsData(nameProps).then((paramsData) =>
            setParamsPokemon(paramsData)
        );
    }, []);

    return (
        <SafeAreaView style={styles.info__container}>
            <Logo />
            <View style={styles.sprite__container}>
                <Image
                    style={styles.pokemon__sprite}
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${paramsPokemon.id}.png`,
                    }}
                />
            </View>
            <View style={styles.pokemon__container}>
                <Text style={styles.pokemon__label}>
                    Name:{" "}
                    <Text style={styles.pokemon__name}>
                        {paramsPokemon.name}
                    </Text>
                </Text>
                <Text style={styles.pokemon__label}>
                    ID:{" "}
                    <Text style={styles.pokemon__id}>{paramsPokemon.id}</Text>
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
