import React from 'react'
import { useParams } from 'react-router-dom';
import folkarts from "../assets/folkarts/info.json";

const Intro = () => {
  var { id } = useParams();
  if(id == null) {
    id = "0";
  }

  return (
    <div className='page'>{folkarts.folkarts.at(parseInt(id))?.name}</div>
  )
}

export default Intro