/// <reference path='./typings.ts'/>

import React from "react";

import NZ from "../assets/images/new-zealand.jpg";

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => (
  <>
    <h1>
      Hi {props.userName} from React! Welcome to {props.lang}!
    </h1>
    <img src={NZ} />
  </>
);
