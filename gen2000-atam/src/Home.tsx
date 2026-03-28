import React from 'react';
import { Link } from 'react-router-dom';
import folkarts from "./assets/folkarts/info.json";

const Home = () => {

  return (
    <div className='page'>
    {
      folkarts.folkarts.map((art, index) => (
        <div className='card'>
          <div className='content'>
            <h2 className='title'>{art.name}</h2>
            <p className='copy'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Link to={"/art/" + index} className='btn'>View More</Link>
          </div>
        </div>
      ))
    }
    </div>
  )
}

export default Home