import React from "react";
import Divider from "../common/Divider";
import "./styles.css";
import personal from "../../pdf/personal.jpg";


const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Flavio Riva</h1>
      <p>Doctoral Candidate in Public Administration and Government, Fundação Getulio Vargas (FGV) </p>
      <img src={personal} alt="Personal"/>
      <div className='links'>
        <a href="./#bio">Bio</a>
        <a href="./#contact">Contact</a>
        <a href="./#working-papers">Working Papers</a>
        <a href="./#work-in-progress">Work in Progress</a>
        <a href="./#learning">Learning</a>
        <a href="./#publications">Publications</a>
        </div>
    </div>
  );
};

export default Menu;
