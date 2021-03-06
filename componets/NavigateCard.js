import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { API_KEY } from '@env'
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/core';
import NavFavorite from './NavFavorite';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Whhatts up Cody</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        styles={autoCompleteStyles}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description, // data.description is the text that is displayed in the autocomplete or the seach bar
                            }))

                            navigation.navigate('RideOptionsCard')

                            // dispatch(selectDestination(null))
                        }}
                        query={{
                            // google places API autocomplete search query
                            key: API_KEY,
                            language: 'en',
                        }}
                        placeholder='Where To?'
                        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                        debounce={400} // debounce adds a delay before the search is executed
                        enablePoweredByContainer={false} // enablePoweredByContainer gets rid of the branding at the bottom of the screen.
                        fetchDetails={true} // fetchDetails enables the fetching of details for each search result
                        minLength={2}  // minimum length of text to search
                        returnKeyType={'search'} // when return is pressed, search is then executed
                    />
                </View>

                <NavFavorite />

                <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-200`}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('RideOptionsCard')}
                        style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
                        <Icon
                            name='car'
                            type='font-awesome'
                            color='white'
                            size={16}
                        />
                        <Text style={tw`text-white text-center`}>
                            Rides
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex flex-row bg-gray-200 justify-between w-24 px-4 py-3 rounded-full`}>
                        <Icon
                            name='fast-food-outline'
                            type='ionicon'
                            color='black'
                            size={16}
                        />
                        <Text style={tw`text-center`}>
                            Eats
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const autoCompleteStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 10,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,

    }

})
