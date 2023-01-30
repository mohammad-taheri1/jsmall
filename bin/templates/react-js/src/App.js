// These codes are generated with jsmall CLI(https://github.com/MamadTaheri/jsmall)

import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar.ui";
import HomePage from "./features/home/home.page";
import useTitle from "./utils/hooks/useTitle.hook";

const App = () => {

   // this is a custom hook that changes the application title using useLayoutEffect hook
   useTitle();

   return (
      <div>
         <Navbar />
         <h1>This is The App.jsx File</h1>
         <HomePage />
      </div>
   );
};

export default App;
