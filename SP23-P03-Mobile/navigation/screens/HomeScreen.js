import { NativeBaseProvider, Button } from 'native-base';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <Text
                    onPress={() => alert('This is the "Home" screen.')}
                    style={styles.baseText}>Welcome to Entrack</Text>
                <Button size="md" colorScheme='cyan'>Book Ticket</Button>
            </View>
        </NativeBaseProvider>
    );
}
const styles = StyleSheet.create({
    baseText: {
        //fontFamily: 'Nunito Sans',
        color: 'white',
        frontSize: 50,
        frontWeight: 'bold'
    },
    container: {
        flex: 1,
        backgroundColor: '#d8b4fe',
        alignItems: 'center',
        justifyContent: 'center',
    },
});