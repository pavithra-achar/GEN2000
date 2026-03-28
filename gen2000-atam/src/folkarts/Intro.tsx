import React from 'react'
import { useParams } from 'react-router-dom';
import folkarts from "../assets/folkarts/info.json";
import Background from '../../components/Background';

const Intro = () => {
  var { id } = useParams();
  if(id == null) {
    id = "0";
  }

  return (
    <div className='page bg'>{folkarts.folkarts.at(parseInt(id))?.name}
    
      <Background />
      <div className='relative'>
        
      </div>
      
      

    </div>
  )
}

export default Intro