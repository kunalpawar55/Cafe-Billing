import React from "react";
import Header from "./Header";
import "./CSSfile/Aboutus.css";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbTack } from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
    <div>
      <Header />
      <div className="about">
        <h1>About us</h1>
        <p>
          Welcome to City Cafe, your cozy retreat in the heart of Pune!
          Established in 2023, we are passionate about serving the finest
          coffee, delicious food, and creating a warm atmosphere where friends
          and families can gather to relax and enjoy.
          <br />
          At City Cafe, we believe in sourcing the best ingredients to craft our
          menu. Our coffee is ethically sourced from local farms, ensuring that
          each cup you enjoy is not only flavorful but also supports our
          community. From freshly baked pastries to hearty meals, our culinary
          team works tirelessly to provide you with a delightful dining
          experience.
          <br />
          Our mission is to create a welcoming space where everyone feels at
          home. Whether you’re looking for a quiet spot to work, a place to
          catch up with friends, or simply a good meal, City Cafe is here for
          you. We host various events, from live music nights to community
          gatherings, and we love being a part of the vibrant Pune community. 
          <br />
          Thank you for choosing City Cafe. We look forward to serving you and
          creating unforgettable moments together!
        </p>
      </div>
      <div className="thankuo">
        <h2>Thanku</h2>
        <FontAwesomeIcon icon={faThumbsUp}/>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
