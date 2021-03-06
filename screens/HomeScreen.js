import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../componets/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { API_KEY } from '@env'
import { useDispatch } from 'react-redux';
import { selectDestination, setOrigin } from '../slices/navSlice';
import NavFavorite from '../componets/NavFavorite';

const HomeScreen = () => {

    const dispatch = useDispatch()

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 130,
                        height: 130,
                        marginTop: -30,
                        marginLeft: -15,
                        marginBottom: -15,
                        resizeMode: 'contain',
                    }}
                    source={
                        { uri: 'https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg', }
                    }
                />
                <GooglePlacesAutocomplete
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 15,
                            backgroundColor: 'rgba(200, 200, 200, 0.4)',
                            borderRadius: 15,
                        },
                    }}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description, // data.description is the text that is displayed in the autocomplete or the seach bar
                        }))

                        dispatch(selectDestination(null))
                    }}
                    query={{
                        // google places API autocomplete search query
                        key: API_KEY,
                        language: 'en',
                    }}
                    placeholder='Where From?'
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    debounce={400} // debounce adds a delay before the search is executed
                    enablePoweredByContainer={false} // enablePoweredByContainer gets rid of the branding at the bottom of the screen.
                    fetchDetails={true} // fetchDetails enables the fetching of details for each search result
                    minLength={2}  // minimum length of text to search
                    returnKeyType={'search'} // when return is pressed, search is then executed
                />

                <NavOptions />
                <NavFavorite />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
