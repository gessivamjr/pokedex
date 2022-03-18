import React from "react";
import { SafeAreaView, Text, Image, FlatList } from "react-native";
import TypeInfo from "../../components/TypeInfo";
import MovesInfo from "../../components/MovesInfo";
import styles from "./style";

export default function InfoPage() {
    return (
        <SafeAreaView style={styles.info__container}>
            {/* <Image style={styles.sprite} source={require("")} /> */}
            <Text style={styles.sprite__name}>
                <Text style={styles.sprite__id}></Text>
            </Text>
            <TypeInfo />
            <MovesInfo />
            <FlatList />
        </SafeAreaView>
    );
}
