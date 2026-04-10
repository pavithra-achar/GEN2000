import React from 'react'
import { useParams } from 'react-router-dom';
import folkarts from "../assets/folkarts/info.json";
import Background from '../../components/Background';
import TextCard from '../../components/TextCard';
import FrameCard from '../../components/FrameCard';

const Intro = () => {
  var { id } = useParams();
  if(id == null) {
    id = "0";
  }

  const art = folkarts.folkarts.at(parseInt(id));
  const frame1 = art?.sections?.intro.content.frame1;

  return (
    <div className='page bg relative'>{folkarts.folkarts.at(parseInt(id))?.name}
    
      <Background />
      <TextCard className="intro-label" titleclass="intro-title" title={folkarts.folkarts.at(parseInt(id))?.name} />
      {/* <img className="intro-label" src='../../public/label.png'/> */}
      {/* <img className="intro-bottom-left" src='../../public/frame3.png'/> */}
      <FrameCard frameSrc="/frame3.png" className="intro-bottom-left" imageSrc={frame1.imageSrc} alt={frame1.alt} modalTitle={frame1.modalTitle} modalContent={frame1.modalContent} />
      {/* <img className="intro-top-right" src='../../public/frame2.png'/>  */}
      <FrameCard frameSrc="/frame2.png" className="intro-top-right" imageSrc={frame1.imageSrc} alt={frame1.alt} modalTitle={frame1.modalTitle} modalContent={frame1.modalContent} />
      <img className="intro-loopy" src="../../public/loopy.png"/>
      <img className="sparkle intro-sparkle-left" src="../../public/sparkle.png"/>
      <img className='sparkle intro-sparkle-right' src="../../public/sparkle.png"/>

    </div>
  )
}

export default Intro