import React from "react";
import { View, Text } from 'react-native';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ frontSize: 26, frontWeight: 'bold' }}> Details Screen</Text>

        </View>
    )
}