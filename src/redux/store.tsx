import countReducer from './countReducer';
import { configureStore } from '@reduxjs/toolkit/react';



const store=configureStore({
    reducer:countReducer
})


export default store;