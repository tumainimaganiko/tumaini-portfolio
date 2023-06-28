import { createSlice } from "@reduxjs/toolkit";
import spaceImage from '../../assets/images/spaceTravelers.png';
import calculatorImage from '../../assets/images/calculator.png';
import bookstoreImage from '../../assets/images/bookstore.png';
import atlasImage from '../../assets/images/globalAtlas.png';

const initialState = {
  projects: [
    {
      name: "The Global Atlas",
      description:
        "The Global Atlas project is a Single Page App (SPA) that aims to create a comprehensive and interactive global atlas of various geographical data. It provides a centralized platform to explore, visualize, and analyze diverse geographical information from around the world.",
        image: atlasImage,
        githubLink: 'https://github.com/tumainimaganiko/global-atlas',
    },
    {
      name: "Space Travelers' Hub",
      description:
        "Space Travelers' Hub is a react application for a company that deals with transporting people to space using rockets. This web application allows users to book rockets and join selected space missions. Also, users can cancel or leave joined mission at any time. Built with React and Redux.",
        image: spaceImage,
        githubLink: 'https://github.com/tumainimaganiko/space-travelers',
      },
      {
        name: "Bookstore",
        description:
          "Bookstore is a React application that helps users to add the title of the book and its author. Also, the application allows users to remove the book from the API. Built with React and Redux.",
          image: bookstoreImage,
          githubLink: 'https://github.com/tumainimaganiko/react-bookstore',
      },
    {
      name: "Math Magicians",
      description:
        "Math-magicians application is a react application that helps users to perform mathematical calculations. Also, a user can get some random quotes from the API Ninjas. Built with React, HTML and CSS",
        image: calculatorImage,
        githubLink: 'https://github.com/tumainimaganiko/math-magicians',
    },
  ],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default projectSlice.reducer;