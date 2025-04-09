import React, { useState } from 'react';
import './CSSfile/Order.css';
import { order } from './DATA/Restrrantdata';
import Header from './Header';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Order() {
  const [counts, setCounts] = useState(order.map(() => 0));
  const [billing, setBilling] = useState([]);
  const [showvalue, setValue] = useState(300);
const navigat=useNavigate();
  const filteredOrders = order.filter(item => item.Price >= showvalue);

  const add = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const sub = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) {
      newCounts[index] -= 1;
    }
    setCounts(newCounts);
  };

  const handleAddToBilling = (index) => {
    if (counts[index] > 0) {
      const item = {
        name: order[index].Foodname,
        contety: order[index].contety,
        quantity: counts[index],
        price: order[index].Price,
      };

      setBilling((prevBilling) => {
        const existingItemIndex = prevBilling.findIndex(billItem => billItem.name === item.name);
        if (existingItemIndex !== -1) {
          const updatedBilling = [...prevBilling];
          updatedBilling[existingItemIndex].quantity += item.quantity;
          return updatedBilling;
        } else {
          return [...prevBilling, item];
        }
      });

      const newCounts = [...counts];
      newCounts[index] = 0;
      setCounts(newCounts);
    } else {
      alert('Please select a quantity before adding to billing.');
    }
  };

  const totalAmount = billing.reduce((total, item) => total + item.quantity * item.price, 0);

  const handleAddBill = () => {
    const storedUsername = localStorage.getItem("username");

    if (!storedUsername) {
      alert("Plese login first")

     setTimeout(() => {
      navigat('/login')

     }, 1000);
      return;
    }

    const userName = prompt("Enter your name for the bill:");

    if (userName && userName.trim() !== "") {
      const billData = {
        name: userName,
        items: billing.map(item => ({
          name: item.name,
          contety: item.contety,
          quantity: item.quantity,
          price: item.price
        })),
        total_Amount: totalAmount
      };

      axios.post("http://localhost:8080/bill/post", billData)
        .then(response => {
          alert("Bill added successfully!");
          setBilling([]);
          setCounts(order.map(() => 0));
        })
        .catch(error => {
          console.error("Error adding bill:", error);
          alert("Failed to add bill!");
        });
    } else {
      alert("Name is required to add the bill.");
    }
  };

  const handleCancel = () => {
    setBilling([]);
    setCounts(order.map(() => 0));
  };

  return (
    <div>
      <Header />
      <div className="filter-section">
        <h1>
          300 
          <input 
            type="range" 
            min={300} 
            max={1000} 
            value={showvalue} 
            onChange={e => setValue(Number(e.target.value))} 
          /> 
          1000
        </h1>
        <h1>{showvalue}</h1>
      </div> 
      <div className="order">
        <h1 id='po'>Place Order</h1>
        <div className="place">
          {
            filteredOrders.map((item, index) => (
              <div key={index} className="order2"> 
                <img src={item.img} alt={item.Foodname} />
                <h2>{item.Foodname}</h2>
                <h3>Rating: {item.Rating}</h3> 
                <h1>Price: <FontAwesomeIcon icon={faIndianRupeeSign} /> {item.Price}</h1> 
                <div className="button1">
                  <button onClick={() => sub(index)}>-</button> 
                  <h1>{counts[index]}</h1>
                  <button onClick={() => add(index)}>+</button>
                </div>
                <button id='add' onClick={() => handleAddToBilling(index)}>ADD</button>
              </div>
            ))
          }
        </div>

        <div className="billing-section">
          <h2>Your Bill:</h2>
          {billing.length > 0 ? (
            billing.map((item, idx) => (
              <div key={idx} className="billing-item">
                <h3>{item.name} (x{item.quantity}) = <FontAwesomeIcon icon={faIndianRupeeSign} /> {item.quantity * item.price}</h3>
              </div>
            ))
          ) : (
            <h3>No items in billing.</h3>
          )}
          <h2>Total Amount: <FontAwesomeIcon icon={faIndianRupeeSign} /> {totalAmount.toFixed(2)}</h2>
          <button onClick={handleCancel}>Cancel Order</button>
          <button onClick={handleAddBill}>Add Bill</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
