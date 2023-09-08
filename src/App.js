import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Foodie from "./components/Foodie";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      {/* importing */}
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Foodie/>
      <Category/>
    </div>
  );
}

export default App;
