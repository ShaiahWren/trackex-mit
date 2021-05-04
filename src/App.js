import React, {useState, useEffect} from 'react';
import logo from "./logo.svg";
import "./App.css";
import styled, { css } from "styled-components";

//components
import { NavBar } from "./components/NavBar";

import TransactionList from './components/Transactions/List';




function App() {

  
 


  return (
   
      <div className="layout">
        <NavBar />
        <TransactionList />
      </div>
 
  );
}

export default App;
