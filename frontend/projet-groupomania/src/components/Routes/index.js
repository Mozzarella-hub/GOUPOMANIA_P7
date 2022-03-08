import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";

const index = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
      </Router>
    </div>
  );
};

export default index;
