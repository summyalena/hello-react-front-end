import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from '../greetings/greeting'

const store = configureStore({
    reducer: {
        greetings: greetingSlice
    }
})

export default store;