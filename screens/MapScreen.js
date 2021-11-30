import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import Map from '../componets/Map'


const MapScreen = () => {
    return (
        <SafeAreaView>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2 bg-red-500`}>
                <Text>Here is the map screen!!</Text>
            </View>
        </SafeAreaView>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
