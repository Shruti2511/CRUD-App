// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Introduction from "./components/Introduction";
import WelcomePage from "./components/Welcome";
import { UserProvider } from "./UserContext";
import back_arrow from "./assets/back_arrow.png";

function App() {
  return (
    <UserProvider>
      <img src={back_arrow} className="back-arrow" />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Introduction key="initial" />} />
            <Route
              path="/intro"
              element={
                <Introduction
                  key="animated-again"
                  text="Alright!, Let's Start"
                  moreText="We'll start by defining and calculating the Lorem ipsum dolor"
                  extraText="Lorem ipsum cupiditate obcaecati corporis ajas kansaake praesentium qui distinctio sed! Quaerat fuga blanditiis natus odio, eos iste explicabo! Amet, delectus laudantium."
                  buttonText="LET'S START"
                  showInput={false}
                  nextRoute="/welcome"
                />
              }
            />
            <Route path="/welcome" element={<WelcomePage />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
