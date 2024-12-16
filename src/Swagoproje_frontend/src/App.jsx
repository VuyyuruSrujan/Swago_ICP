import React from "react";
import Wallet from "./Wallet";
import MailLogin from "./MailLogin";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

export default function App(){

  return(

    <>
      {/* <Wallet />
      <MailLogin /> */}
       <Router>
        <Routes>
          <Route path="/" element={<MailLogin />} />
          <Route path="/Wallet" element={<Wallet />} />
        </Routes>
    </Router>
    </>

  );
}


