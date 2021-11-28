import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core';

const data = [
    {
        id: 1,
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    },
    {
        id: 2,
        title: 'Order Food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen',
    },
];

const NavOptions = () => {

    const navigation = useNavigation();

    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={data}
            horizontal={true}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                >
                    <View>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: 'contain' }}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            type='antdesign'
                            name='arrowright'
                            color='white'
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions

// const styles = StyleSheet.create({})
