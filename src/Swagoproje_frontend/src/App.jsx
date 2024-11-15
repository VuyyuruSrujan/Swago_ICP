import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Marketplace from "./Pages/Marketplace";
import Login from "./Pages/Login";
import ViewAllNFTs from "./Pages/ViewAllNFTs";
import ViewNFT from "./Pages/viewNFT";
import ProfilePage from "./Pages/ProfilePage";
import DisplayNFT from "./Pages/DisplayNFT";
import MintForm from "./Pages/MintForm";
import { createClient } from "@connect2ic/core";
import { defaultProviders } from "@connect2ic/core/providers";
import Collection from "./Pages/Collection";
import CustomCursor from "./CustomCursor";

import {
  Connect2ICProvider
} from "@connect2ic/react";

const client = createClient({
  canisters: {
    the_zori_backend
  },
  providers: defaultProviders,
});

function Layout({ children }) {
  const location = useLocation();
  const excludeNavbarPaths = ["/login"];

  return (
    <>
      {!excludeNavbarPaths.includes(location.pathname) && <Navbar />}
      {children}
    </>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const categories = {
    Avatars: [
      { id: 1, imageUrl: avt_1, title: "Avatar 1", price: "2", currency: "ICP" },
      { id: 2, imageUrl: avt_2, title: "Avatar 2", price: "3", currency: "ICP" },
      { id: 3, imageUrl: avt_3, title: "Avatar 3", price: "2.5", currency: "ICP" },
    ],
    Land: [
      { id: 1, imageUrl: nft1, title: "Land 1", price: "5", currency: "ICP" },
      { id: 2, imageUrl: nft2, title: "Land 2", price: "8", currency: "ICP" },
      { id: 3, imageUrl: nft3, title: "Land 3", price: "5", currency: "ICP" },
    ],
    Wearables: [
      { id: 1, imageUrl: wear_1, title: "Wearable 1", price: "1", currency: "ICP" },
      { id: 2, imageUrl: wear_2, title: "Wearable 2", price: "1.5", currency: "ICP" },
      { id: 3, imageUrl: wear_3, title: "Wearable 3", price: "1", currency: "ICP" },
    ],
  };

  return (
    <Connect2ICProvider client={client}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Marketplace categories={categories} />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/display-nft" element={<DisplayNFT />} />
            <Route path="/mintNFT" element={<MintForm />} />
            <Route path="/category/:category" element={<ViewAllNFTs categories={categories} />} />
            <Route path="/category/:category/:nftId" element={<ViewNFT categories={categories} />} />
          </Routes>
        </Layout>
      </Router>
    </Connect2ICProvider>
  );
}

export default App;