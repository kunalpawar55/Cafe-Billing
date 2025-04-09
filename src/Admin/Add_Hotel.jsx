import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './AddHotel.css';
import { useNavigate } from 'react-router-dom';

export default function Add_Hotel() {
  const navigate = useNavigate();

  useEffect(() => {
    const userType = localStorage.getItem("userType");

    if (userType !== "Admin") {
      alert("Access denied! Admins only.");
      navigate('/Login'); 
    }
  }, []);

  let [showdata, setdata] = useState({
    hotelName: "",
    rating: "",
    price: "",
    amenities: "",
    location: "",
    latitude: "",
    longitude: "",
    contain: ""
  });

  const handleChange = (e) => {
    setdata({ ...showdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!showdata.hotelName || !showdata.rating || !showdata.price) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/hotel', showdata);
      console.log("Response:", response.data);
      alert("Hotel added successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding hotel");
    }
  };

  return (
    <div className="admin-container">
      <h1 className="title">Admin Data</h1>

      <div className="postdata">
        <input
          type="text"
          name="hotelName"
          placeholder="Hotel Name"
          value={showdata.hotelName}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={showdata.rating}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={showdata.price}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="amenities"
          placeholder="Amenities"
          value={showdata.amenities}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={showdata.location}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="number"
          name="latitude"
          placeholder="Latitude"
          value={showdata.latitude}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="number"
          name="longitude"
          placeholder="Longitude"
          value={showdata.longitude}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="contain"
          placeholder="Contain"
          value={showdata.contain}
          onChange={handleChange}
          className="input-field"
        />

        <button onClick={handleSubmit} className="submit-button">Submit</button>
      </div>
    </div>
  );
}
