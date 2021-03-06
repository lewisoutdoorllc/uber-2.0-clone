import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames'
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { API_KEY } from '@env'

const Map = () => {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!origin || !destination) return;
// this is the code that will center the map on the user's location and zoom in or out to fit 
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
            // animated: true,
        });
    } , [origin, destination])

    useEffect(() => {
        if (!origin || !destination) return;
        
        const getTravelTime = async () => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
            units=imperial&origins=${origin.description}&destinations=${destination.description}
            &key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
            dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
            })
        }
        getTravelTime()
    } , [origin, destination, API_KEY])

    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType='mutedStandard' // helps to take some of the clutter out of the map
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
{/* this is the line for the between the origin and the destination */}
            {origin && destination &&  (
            <MapViewDirections
                origin={origin.description}
                destination={destination.description}
                apikey={API_KEY}
                strokeWidth={3}
                strokeColor='black'
            />
            )}

{/* these are the markers for the origin and destination */}
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}   // this is the location of the marker   
                    title='Origin'
                    description={origin.description}
                    identifier='origin'
                />
            )}
            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}   // this is the location of the marker   
                    title='Destination'
                    description={destination.description}
                    identifier='destination'
                />
            )}
        </MapView>
    )
}

export default Map

const styles = StyleSheet.create({})
