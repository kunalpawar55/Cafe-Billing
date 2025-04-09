import React, { useState, useCallback, Suspense, lazy } from 'react';
import Header from './Header';
import Footer from './Footer';
import { data } from './Data';
import './CSSfile/Home.css';
import { popular } from './DATA/Popularloc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';

const Allorder = lazy(() => import('./Allorder'));

export default function Home() {
    let [showrest, setrest] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState(popular);
    
    const handleEvent = useCallback(debounce((e) => {
        const city = e.target.value;
        setrest(city);

        if (city === "Default") {
            setFilteredRestaurants(popular);
        } else {
            setFilteredRestaurants(popular.filter(item => item.dis === city));
        }
    }, 300), []);

    const itemsToShow = filteredRestaurants.slice(0, 10); // Render only the first 10 items initially

    return (
        <div>
            <Header />
            <div className="Home">
                <div className="item">
                    {data.map((item, index) => (
                        <li key={index}>
                            <img src={item.img} alt="" />
                            <h2>{item.name}</h2>
                            <h3>{item.hotel}</h3>
                            <Link to={'/order'}><button>Fast Food</button></Link>
                        </li>
                    ))}
                </div>
            </div>

            <div className="collection">
                <h1>Popular localities in and around you</h1>
                <select id="City" value={showrest} onChange={handleEvent}>
                    <option value="Default">Default</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Dhule">Dhule</option>
                    <option value="Nagpur">Nagpur</option>
                </select>

                <ul>
                    {itemsToShow.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.place}
                            <Link to={'/Order'}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </li>
                    ))}
                </ul>

                <Suspense fallback={<div>Loading...</div>}>
                    <Allorder />
                </Suspense>
            </div>

            <Footer />
        </div>
    );
}
