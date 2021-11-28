import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        // action changes the state
        setOrigin: (state, action) => {
            // info inside the action is the payload
            state.origin = action.payload;
        },
        setDetination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    }
});
export const { setOrigin, setDetination, setTravelTimeInformation } = navSlice.actions;
// selectors are used to get the state
export const selectOrigin = state => state.nav.origin;
export const selectDestination = state => state.nav.destination;
export const selectTravelTimeInformation = state => state.nav.travelTimeInformation;

export default navSlice.reducer;