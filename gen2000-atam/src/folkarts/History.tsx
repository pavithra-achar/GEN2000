import { useParams } from 'react-router-dom';
import folkarts from "../assets/folkarts/info.json";
import Background from '../../components/Background';
import FrameCard from '../../components/FrameCard';
import TextCard from '../../components/TextCard';
import Arrow from '../../components/Arrow';

const History = () => {
  var { id } = useParams();
  if(id == null) {
    id = "0";
  }
  const art = folkarts.folkarts.at(parseInt(id));
  const frame1 = art?.sections?.history.content.frame1;
  const frame2 = art?.sections?.history.content.frame2;
  const frame3 = art?.sections?.history.content.frame3;
  const frame4 = art?.sections?.history.content.frame4; 

  return (
    <div className='page bg relative'>{folkarts.folkarts.at(parseInt(id))?.name}
    
      <Background />
      <TextCard className="history-label" title={"History"} />
      {/* <img className="history-label" src='../../public/label.png'/> */}
      {/* <img className="history-bottom-left" src='../../public/frame2.png'/> */}
      <FrameCard frameSrc="/frame2.png" 
      className="history-bottom-left" 
      imageSrc={frame1?.imageSrc} 
      alt={frame1?.alt} 
      modalTitle={frame1?.modalTitle} 
      modalContent={frame1?.modalContent} />
      {/* <img className="history-top-left" src='../../public/frame2.png'/>  */}

       <FrameCard frameSrc="/frame2.png" 
      className="history-top-left" 
      imageSrc={frame2?.imageSrc} 
      alt={frame2?.alt} 
      modalTitle={frame2?.modalTitle} 
      modalContent={frame2?.modalContent} />

      <FrameCard frameSrc="/frame3.png" 
      className="history-center" 
      imageSrc={frame3?.imageSrc} 
      alt={frame3?.alt} 
      modalTitle={frame3?.modalTitle} 
      modalContent={frame3?.modalContent} />
    {/* <img className="history-center" src='../../public/frame3.png'/>  */}
      {/* <img className="history-top-right" src='../../public/frame1.png'/>  */}
      
      <FrameCard
          frameSrc="/frame1.png"
          imageSrc={frame4?.imageSrc}
          alt={frame4?.alt}
          modalTitle={frame4?.modalTitle}
          modalContent={frame4?.modalContent}
          className="history-top-right"
          innerClassName=''
        />
        <FrameCard frameSrc={frame1?.imageSrc} className="intro-bottom-right bg-cover" imageSrc="" alt={frame1?.alt} modalTitle={frame1?.modalTitle} modalContent={frame1?.modalContent} />
      <img className="intro-loopy" src="/loopy.png"/>
      <img className="history-loopy" src="/loopy.png"/>
      <img className="sparkle history-sparkle-left" src="/sparkle.png"/>
      <img className='sparkle history-sparkle-right' src="/sparkle.png"/>
      <img className="history-star" src="/star.png"/>
      <img className="history-flower" src="/flower.png"/>

      <Arrow className="nav-arrow-right" link={`/art/${id}/presentDay`} src="right" />
      <Arrow className="nav-arrow-left" link={`/art/${id}/intro`} src="left" />
    </div>
  )
}

export default History