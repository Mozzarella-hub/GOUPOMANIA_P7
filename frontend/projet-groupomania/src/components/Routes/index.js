import React from 'react';
import Banner from "../Banner";
import { BrowserRouter as Routes } from 'react-router-dom';


const index = () => {
  return (
    <div>
      <Banner />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} /> */}
      </Routes>
    </div>
  );
};

export default index;