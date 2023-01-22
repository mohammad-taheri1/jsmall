// These codes are generated with jsmall CLI(https://github.com/MamadTaheri/jsmall)

import React from "react";
import "./App.css";
import Navbar from "./components/general/navbar.ui";
import HomePage from "./pages/home.page";
import useTitle from "./utils/hooks/useTitle.hook";

const App = () => {
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
