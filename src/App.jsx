import React from "react";
import Navbar from "./navbar";
import Register from "./register";
import LoginPage from "./LoginPage";
import Footer from "./footer";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */} {/* Esto queda comentado por ahora */}
      {/* <Register /> */} {/* Esto queda comentado por ahora */}
      <LoginPage />
      <Footer />
    </div>
  );
};

export default App;
