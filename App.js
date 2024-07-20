import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';   
import p1 from "./kohli.jpeg";
import p2 from "./rohit.jpeg";
import p3 from "./dhoni.jpeg";
import p0 from "./india.png";

function App() {
  return (
    <> 
    <body> 
    <h1 className='CricketHeading'>The Batman</h1>
    <div className="carousel-container">   
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={p0} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item active">
            <img src={p1} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={p2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={p3} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </body>
    </>
  );
}

export default App;