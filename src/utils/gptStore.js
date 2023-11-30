import { createSlice } from "@reduxjs/toolkit";

const gptStore = createSlice({
    name: 'gpt',
    initialState: {
        toggleValue: false,
    },
    reducers: {
        toggleGpt: (state) => {
            state.toggleValue = !state.toggleValue;
        }
    }
})
export const {toggleGpt} = gptStore.actions;
export default gptStore.reducer;