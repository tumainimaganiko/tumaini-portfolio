import { createSlice } from "@reduxjs/toolkit";
import spaceImage from '../../assets/images/testingImg.png';

const initialState = {
  projects: [
    
  ],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default projectSlice.reducer;