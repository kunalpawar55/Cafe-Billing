import React, { useState } from 'react';
import { allorderdata } from './DATA/AllOrderdata';
import './CSSfile/Allorder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default function Allorder() {
    const [filteredData, setFilteredData] = useState(allorderdata);
    const [showvalue, setvalue] = useState();

    const handelfast = () => {
        const fastDelivery = allorderdata.filter(item => {
            let time = parseInt(item.time);
            return time <= 30;
        });
        setFilteredData(fastDelivery);
    };

    const handelRating = () => {
        const rating = allorderdata.filter(item => item.Rating >= 4);
        setFilteredData(rating);
    };

    const handelveg = () => {
        const veg = allorderdata.filter(item => item.foodtype === 'veg');
        setFilteredData(veg);
    };

    const handleNewOnSwiggy = () => {
        const newcity=allorderdata.filter(item=>item.date===4-5-2024)
        setFilteredData(newcity);

    };


    const handleNonVeg = () => {
        const nonVeg = allorderdata.filter(item => item.foodtype === 'non-veg');
        setFilteredData(nonVeg);
    };

    return (
        <div>
            <div className="alldata">
                <h1>Restaurants with online food delivery in Mumbai</h1>
                <button onClick={handelfast}>Fast Delivery</button>
                <button onClick={handleNewOnSwiggy}>New on Cafe</button>
                <button onClick={handelRating}>Rating 4.0+</button>
                <button onClick={handelveg}>Pure Veg</button>
                <button onClick={handleNonVeg}>Non-Veg</button>
            </div>
            <div className="allordermap">
                {filteredData.map((item, index) => (
                    <div className='Allorderitem' key={index}>
                        <img src={item.image} alt="" />
                        <h1>{item.orName}</h1>
                        <h2>{item.Rating} ★ <FontAwesomeIcon icon={faClock} /> {item.time} min</h2>
                        <h3>{item.foodtype}</h3>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
