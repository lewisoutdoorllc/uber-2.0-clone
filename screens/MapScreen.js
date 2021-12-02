import { useNavigation } from '@react-navigation/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import Map from '../componets/Map'
import NavigateCard from '../componets/NavigateCard'
import RideOptionsCard from '../componets/RideOptionsCard'


const MapScreen = () => {

    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

    return (
        <View>

            <TouchableOpacity
                style={tw`absolute top-16 left-8 z-50 p-3 bg-gray-100 rounded-full shadow-lg`}
                onPress={() => navigation.navigate('Home')}
                >
                
                <Icon
                    name='menu'
                />
            </TouchableOpacity>

            <View style={tw`h-1/2`}>
                <Map />
            </View>

            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name='NavigateCard'
                        component={NavigateCard}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name='RideOptionsCard'
                        component={RideOptionsCard}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
