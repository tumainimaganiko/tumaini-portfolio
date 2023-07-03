import { createSlice } from "@reduxjs/toolkit";
import spaceImage from "../../assets/images/spaceTravelers.png";
import calculatorImage from "../../assets/images/calculator.png";
import bookstoreImage from "../../assets/images/bookstore.png";
import atlasImage from "../../assets/images/globalAtlas.png";

const initialState = {
  projects: [
    {
      id:1,
      name: "The Global Atlas",
      description: `
        The Global Atlas project is a Single Page App (SPA) that aims to create a comprehensive and interactive global atlas of various geographical data.
        It provides a centralized platform to explore, visualize, and analyze diverse geographical information from around the world.   
        This project has a searching functionality that enables users to easily retrieve specific information about countries from an API. 
        Users can input the name of a country, and the system will fetch relevant data and present it in a structured format. 
        The project leverages an extensive API database that includes details about countries worldwide
        `,
      image: atlasImage,
      githubLink: "https://github.com/tumainimaganiko/global-atlas",
    },
    {
      id:2,
      name: "Space Travelers' Hub",
      description: `Space Travelers' Hub is a cutting-edge React application developed for a pioneering company specializing in space transportation via rockets.
        This dynamic web application empowers users to seamlessly book rockets and participate in thrilling space missions.
        With the ability to easily join, cancel, or leave missions at any time, Space Travelers' Hub offers unparalleled flexibility and control.        
        Crafted using React and Redux, the application showcases the latest advancements in web technology. Its intuitive user interface and smooth user experience ensure a seamless journey from rocket selection to mission participation.
        `,
      image: spaceImage,
      githubLink: "https://github.com/tumainimaganiko/space-travelers",
    },
    {
      id:3,
      name: "Bookstore",
      description: `
      The bookstore is a sophisticated React application designed to streamline the management of a collection of books.
      This user-friendly web application empowers users to effortlessly add new books by entering their titles and authors.
      With just a few clicks, user can efficiently catalog his/her entire library, making it a breeze to keep track of their literary treasures.
      Built with React and Redux, Bookstore leverages the power of these cutting-edge technologies to deliver a seamless and intuitive user experience.
      The application boasts a sleek and modern interface, ensuring a delightful journey as you curate your book collection.
      In addition to adding books, Bookstore offers the functionality to remove books from the API. This allows you to easily update your collection and remove any entries that are no longer relevant.
      `,
      image: bookstoreImage,
      githubLink: "https://github.com/tumainimaganiko/react-bookstore",
    },
    {
      id:4,
      name: "Math Magicians",
      description:`
      The Math-magicians application is an innovative React-based tool designed to assist users in performing various mathematical calculations with ease and efficiency.
      This dynamic web application empowers users to effortlessly execute a wide range of mathematical operations, making complex calculations a breeze. Math magicians provide a seamless and intuitive interface for performing accurate computations.
      Additionally, Math-magicians go beyond mathematics by integrating an API Ninjas feature that allows users to explore a collection of inspiring and thought-provoking quotes. By accessing the API, users can receive random quotes to spark inspiration and motivation during their mathematical journey.      
      `,
        image: calculatorImage,
      githubLink: "https://github.com/tumainimaganiko/math-magicians",
    },
  ],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default projectSlice.reducer;
