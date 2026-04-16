import { useParams } from 'react-router-dom';
import folkarts from "../assets/folkarts/info.json";
import Background from '../../components/Background';
import FrameCard from '../../components/FrameCard';
import TextCardTilt from '../../components/TextCardTilt';
import Arrow from '../../components/Arrow';

const PresentDay = () => {
  var { id } = useParams();
  if (id == null) id = "0";

  const art = folkarts.folkarts.at(parseInt(id));
  const { frame1 } = art?.sections?.presentDay.content ?? {};

  return (
    <div className='page bg relative present-day'>
      {art?.name}
      <Background />
      <div className=''>
         {/* <img className='label' src="/label-tilt.png"/> */}
        <TextCardTilt className="label" titleclass="label" title={"Present Day"} />
         <img className='frame3' src="/frame3.png"/> 
         <img className='frame2' src="/frame2.png"/>
    
         {/* <img className='frame1' src="/frame1.png"/> */}
        <FrameCard
          frameSrc="/frame1.png"
          imageSrc={folkarts.folkarts.at(parseInt(id))?.sections?.presentDay.content.frame1.imageSrc}
          alt={folkarts.folkarts.at(parseInt(id))?.sections?.presentDay.content.frame1.alt}
          modalTitle={folkarts.folkarts.at(parseInt(id))?.sections?.presentDay.content.frame1.modalTitle}
          modalContent={folkarts.folkarts.at(parseInt(id))?.sections?.presentDay.content.frame1.modalContent}
          className="frame1"
          innerClassName=''
        />
         <img className="lotus"src="/lotus.png"/>
         
         <img className='star' src="/star.png"/>
         <img className='leaf'src="/leaf.png"/>
         <img className='arrow' src="/arrow.png"/>

        <FrameCard frameSrc="/frame3.png" className="frame3" imageSrc={frame1?.imageSrc} alt={frame1?.alt} modalTitle={frame1?.modalTitle} modalContent={frame1?.modalContent} />
        <FrameCard frameSrc="/frame2.png" className="frame2" imageSrc={frame1?.imageSrc} alt={frame1?.alt} modalTitle={frame1?.modalTitle} modalContent={frame1?.modalContent} />
        <FrameCard frameSrc="/frame1.png" className="frame1" imageSrc={frame1?.imageSrc} alt={frame1?.alt} modalTitle={frame1?.modalTitle} modalContent={frame1?.modalContent} />

        <img className="lotus" src="/lotus.png" />
        <img className='star' src="/star.png" />
        <img className='leaf' src="/leaf.png" />
        <img className='arrow' src="/arrow.png" />
        <img className='loopy' src="/loopy.png" />

        <Arrow className="nav-arrow-right" link={`/art/${id}/performance`} src="right" />
      <Arrow className="nav-arrow-left" link={`/art/${id}/history`} src="left" />
      </div>
    </div>
  );
};

export default PresentDay;