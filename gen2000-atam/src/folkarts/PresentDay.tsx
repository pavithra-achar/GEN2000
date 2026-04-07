import { useParams } from 'react-router-dom';
import folkarts from "../assets/folkarts/info.json";
import Background from '../../components/Background';
import FrameCard from '../../components/FrameCard';

const PresentDay = () => {
  var { id } = useParams();
  if (id == null) id = "0";

  const art = folkarts.folkarts.at(parseInt(id));
  const { frame1 } = art?.sections?.presentDay.content ?? {};

  return (
    <div className='page bg present-day'>
      {art?.name}
      <Background />
      <div className='relative'>
        <img className='label' src="/label-tilt.png" />

        <FrameCard frameSrc="/frame3.png" className="frame3" imageSrc={frame1.imageSrc} alt={frame1.alt} modalTitle={frame1.modalTitle} modalContent={frame1.modalContent} />
        <FrameCard frameSrc="/frame2.png" className="frame2" imageSrc={frame1.imageSrc} alt={frame1.alt} modalTitle={frame1.modalTitle} modalContent={frame1.modalContent} />
        <FrameCard frameSrc="/frame1.png" className="frame1" imageSrc={frame1.imageSrc} alt={frame1.alt} modalTitle={frame1.modalTitle} modalContent={frame1.modalContent} />

        <img className="lotus" src="/lotus.png" />
        <img className='star' src="/star.png" />
        <img className='leaf' src="/leaf.png" />
        <img className='arrow' src="/arrow.png" />
        <img className='loopy' src="/loopy.png" />
      </div>
    </div>
  );
};

export default PresentDay;