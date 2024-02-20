import React from "react";
import "./Introduction.css";
export default function Introduction(intro) {
  return (
    <div class="Parent"> 
      <img src={intro.imgaddress} alt="Student Pic" />
      <h1>{intro.name}</h1>
      <h2>Age : {intro.age}</h2>
      <h3>Course : {intro.course}</h3>
    </div>
  );
}
