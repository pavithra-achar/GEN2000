import { useParams } from 'react-router-dom';
import folkarts from "../assets/folkarts/info.json";
import Background from '../../components/Background';
import FrameCard from '../../components/FrameCard';

const Artist = () => {
  var { id } = useParams();
  if(id == null) {
    id = "0";
  }

  return (
    <div className='page bg artist'>{folkarts.folkarts.at(parseInt(id))?.name}
    
      <Background />
      <div className='relative'>
        <img className = "master-name"src="/master-name.png"/>
       
       <FrameCard
          frameSrc="/frame1.png"
          imageSrc="/atam-logo.png"
          alt="Artist Photo"
          modalTitle="About the master"
          modalContent="lorem ipsum..."
          className="artist-frame"
          imageClassName="top-[10%] left-[10%] w-[80%] h-[80%]" 
        />
        <img className='artist-frame' src="/frame1.png"/>
        <img className='leaf' src="/leaf.png"/>
        
        <img className='frame2' src="/frame2.png"/>
         <img className='frame3' src="/frame2.png"/>
         <img className='star' src="/star.png"/>
          <img className="lotus"src="/lotus.png"/>
      </div>
    </div>
  )
}

export default Artist