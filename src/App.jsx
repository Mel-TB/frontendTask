/* eslint-disable no-unused-vars */
import React from "react";
import { WidgetList } from "./components";
import "./styles/global.scss";

function App() {
  return (
    <div className='app'>
      <h1>Per product Widgets</h1>
      <WidgetList />
    </div>
  );
}

export default App;
