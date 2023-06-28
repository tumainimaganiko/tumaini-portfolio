import { configureStore } from '@reduxjs/toolkit';
import ProjectReducer from './Projects/projectSlice';

const store = configureStore({
    reducer: {
        projects: ProjectReducer,
    }
})

export default store;