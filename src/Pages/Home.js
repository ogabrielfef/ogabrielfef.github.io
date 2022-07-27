import React from "react";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};