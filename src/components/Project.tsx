import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.webp';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://cricket-stars.vercel.app/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://cricket-stars.vercel.app/" target="_blank" rel="noreferrer"><h2>Search Your Favourite Cricketer</h2></a>
                <p>Developed cricketer finder website with React
                This website filters the given cricketer from the other cricketers</p>
            </div>
            <div className="project">
                <a href="https://flight-mrbf.onrender.com" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://flight-mrbf.onrender.com" target="_blank" rel="noreferrer"><h2>Flight Booking System</h2></a>
                <p>Designed, developed, and launched a website that
                 Allows customers to book flights based on availability; admin could add flights.</p>
            </div>
            <div className="project">
                <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
                <h2>Creating a Database on Online Shopping</h2>
                <p>
                    Built an e-commerce database to store orders and transactions, normalized to reduce redundancy. 
                    Enhanced understanding of SQL queries for data access and manipulation.
                </p>
            </div>

        </div>
    </div>
    );
}

export default Project;