import React from "react";
import { StyleSheet, View, Text } from 'react-native';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={styles.baseText}> Details Screen</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Nunito Sans',
        color: 'white',
        frontSize: 26,
        frontWeight: 'bold'
    },
    container: {
        flex: 1,
        backgroundColor: '#d8b4fe',
        alignItems: 'center',
        justifyContent: 'center',
    },
});