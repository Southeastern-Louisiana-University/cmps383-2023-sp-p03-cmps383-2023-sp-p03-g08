import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={styles.baseText}>Welcome to Entrack</Text>
            <Button title="Book Ticket"></Button>
        </View>
    );
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