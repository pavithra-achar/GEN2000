import React from 'react'
import { useParams } from 'react-router-dom';
import folkarts from "../assets/folkarts/info.json";
import Background from '../../components/Background';
import TextCard from '../../components/TextCard';
import Arrow from '../../components/Arrow';

const Intro = () => {
  var { id } = useParams();
  if(id == null) {
    id = "0";
  }

  return (
    <div className='page bg relative'>{folkarts.folkarts.at(parseInt(id))?.name}
    
      <Background />
      <TextCard className="intro-label" titleclass="intro-title" title={"Salangai Kittiyattam"} />
      {/* <img className="intro-label" src='../../public/label.png'/> */}
      <img className="intro-bottom-left" src='../../public/frame3.png'/>
      <img className="intro-top-right" src='../../public/frame2.png'/> 
      
      <img className="intro-loopy" src="../../public/loopy.png"/>
      <img className="sparkle intro-sparkle-left" src="../../public/sparkle.png"/>
      <img className='sparkle intro-sparkle-right' src="../../public/sparkle.png"/>

      <Arrow className="nav-arrow-right" link={`/art/${id}/history`} src="right" />
    </div>
  )
}

export default Intro