import React from 'react'
import { useParams } from 'react-router-dom';
import folkarts from "../assets/folkarts/info.json";

const Intro = () => {
  var { id } = useParams();
  if(id == null) {
    id = "0";
  }

  return (
    <div className='page bg'>{folkarts.folkarts.at(parseInt(id))?.name}
    
      
          <img className="top-left" src="../../public/top-scrap.png"></img>
          <img className="bottom-right" src="../../public/bottom-scrap.png"></img>
      
      

      </div>
  )
}

export default Intro