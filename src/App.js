import "./App.css";
import Router from "./Routes/Router";
// import { useState } from "react";

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const toggleRoute = () =>{
  //   setIsLoggedIn(!isLoggedIn)
  // }
  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
