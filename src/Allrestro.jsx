import React from "react";
import { Hoteldata } from "./DATA/HotelData";
import './CSSfile/Allrestro.css'
import Header from "./Header";
import Footer from "./Footer";
export default function Allrestro() {
  return (
    <div>
        <Header/>
        <h1 className="Name">Top Restro</h1>
        <div className="allrestro">  
                {Hoteldata.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <img src={item.image} alt="" />
          <p>Location: {item.location}</p>
          <p>Rating: {item.rating} stars</p>
          <p>Price per Night: ₹{item.pricePerNight}</p>
          <p>Amenities: {item.amenities.join(", ")}</p>
          <a href= {`https://www.google.com/maps/search/${item.name}`} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>
      ))}
      </div>
<Footer/>
    </div>
    
  );
}
