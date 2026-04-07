import { useParams } from 'react-router-dom';
import folkarts from "../assets/folkarts/info.json";
import Background from '../../components/Background';
import FrameCard from '../../components/FrameCard';

const Artist = () => {
  var { id } = useParams();
  if(id == null) {
    id = "0";
  }

  const numericId = parseInt(id);

  return (
    <div className='page bg artist'>{folkarts.folkarts.at(numericId)?.name}
    
      <Background />
      <div className='relative'>
        <img className = "master-name" src="/master-name.png"/>
       <FrameCard
          frameSrc="/frame1.png"
          imageSrc={folkarts.folkarts.at(numericId)?.sections?.artists.content.frame1.imageSrc}
          alt={folkarts.folkarts.at(numericId)?.sections?.artists.content.frame1.alt}
          modalTitle={folkarts.folkarts.at(numericId)?.sections?.artists.content.frame1.modalTitle}
          modalContent={folkarts.folkarts.at(numericId)?.sections?.artists.content.frame1.modalContent}
          className="artist-frame"
          innerClassName=''
        />

        <img className='leaf' src="/leaf.png"/>
        <FrameCard
          frameSrc='=/frame2.png'
          imageSrc={folkarts.folkarts.at(numericId)?.sections?.artists.content.frame2?.imageSrc}
          alt={folkarts.folkarts.at(numericId)?.sections?.artists.content.frame2?.alt}
          modalTitle={folkarts.folkarts.at(numericId)?.sections?.artists.content.frame2?.modalTitle}
          modalContent={folkarts.folkarts.at(numericId)?.sections?.artists.content.frame2?.modalContent}
          className="frame2"
          innerClassName=''
        />

        <FrameCard
          frameSrc='=/frame2.png'
          imageSrc={folkarts.folkarts.at(numericId)?.sections?.artists.content.frame3?.imageSrc}
          alt={folkarts.folkarts.at(numericId)?.sections?.artists.content.frame3?.alt}
          modalTitle={folkarts.folkarts.at(numericId)?.sections?.artists.content.frame3?.modalTitle}
          modalContent={folkarts.folkarts.at(numericId)?.sections?.artists.content.frame3?.modalContent}
          className="frame3"
          innerClassName=''
        />
        {/* <img className='frame2' src="/frame2.png"/>
         <img className='frame3' src="/frame2.png"/> */}
         <img className='star' src="/star.png"/>
          <img className="lotus"src="/lotus.png"/>
      </div>
    </div>
  )
}

export default Artist