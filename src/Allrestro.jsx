import React, { useEffect, useState } from "react";
import { Hoteldata } from "./DATA/HotelData";
import './CSSfile/Allrestro.css'
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import image1 from '../src/images/Restro.jpg'

export default function Allrestro() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/hotel")
      .then((response) => setHotels(response.data)) 
      .catch((err) => console.error("Error fetching hotels:", err));
  }, []); 

  return (
    <div>
        <Header/>
        <h1 className="Name">Top Restro</h1>
        <div className="allrestro">  
                {hotels.map((item, index) => (
        <div key={index}>
          <h1>{item.hotelName}</h1>
          <img src={image1} alt="" />
          <p>Location: {item.location}</p>
          <p>Rating: {item.rating} stars</p>
          <p>Price per Night: ₹{item.price}</p>
          <p>Amenities: {item.amenities}</p>
          <a href= {`https://www.google.com/maps/search/${item.hotelName}`} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>
      ))}
      </div>
      
<Footer/>
    </div>
    
  );
}
