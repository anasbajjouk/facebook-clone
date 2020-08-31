import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import AppBody from "./components/appBody/AppBody";
import SideBar from "./components/sidebar/SideBar";
import Feed from "./components/feed/Feed";
import Widgets from "./components/widgets/Widgets";

function App() {
  return (
    <div className="app">
      <Header />
      <AppBody />
      <SideBar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
