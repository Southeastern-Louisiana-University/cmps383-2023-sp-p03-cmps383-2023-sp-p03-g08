import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import DetailsScreen from './screens/DetailsScreen';

//Screen names
const homeName = 'Home';
const detailsName = 'Ticket Details';
const bookingName = ' Ticket Booking';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === detailsName) {
                            iconName = focused ? 'list' : 'list-outline';
                        } else if (rn === bookingName) {
                            iconName = focused ? 'ticket' : 'ticket-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 }

                }}
            >

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={bookingName} component={BookingScreen} />
                <Tab.Screen name={detailsName} component={DetailsScreen} />



            </Tab.Navigator>
        </NavigationContainer>
    );
}