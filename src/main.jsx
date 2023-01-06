import React from "react";
import ReactDOM from "react-dom/client";
import './styles.css';

import { CounterApp } from "./CounterApp";

import { CounterApp2 } from "./CounterApp2";
import { FirstApp } from "./FirstApp";
import { HelloWorldApp } from './HelloWorldApp'; 



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CounterApp value={ 100 }/>
    {/* <FirstApp title='Esto es un titulo.'/> */}
    </React.StrictMode>
);