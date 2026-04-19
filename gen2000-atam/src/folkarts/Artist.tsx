import { useParams } from 'react-router-dom';
import folkarts from "../assets/folkarts/info.json";
import Background from '../../components/Background';
import FrameCard from '../../components/FrameCard';
import Arrow from '../../components/Arrow';
import ArtistName from '../../components/ArtistName';

const Artist = () => {
  var { id } = useParams();
  if (id == null) id = "0";

  const art = folkarts.folkarts.at(parseInt(id));
  const { frame1 } = art?.sections?.artists.content ?? {};

  return (
    <div className='page bg artist'>
      {art?.name}
      <Background />
      <div className=''>
        <ArtistName className="master-name" titleclass="master-name" title={art?.sections.artists.name} />

        <FrameCard frameSrc="/frame1.png" className="artist-frame" imageSrc={frame1?.imageSrc} alt={frame1?.alt} modalTitle={frame1?.modalTitle} modalContent={frame1?.modalContent} />
        <FrameCard frameSrc="/frame2.png" className="frame2"       imageSrc={frame1?.imageSrc} alt={frame1?.alt} modalTitle={frame1?.modalTitle} modalContent={frame1?.modalContent} />
        <FrameCard frameSrc="/frame2.png" className="frame3"       imageSrc={frame1?.imageSrc} alt={frame1?.alt} modalTitle={frame1?.modalTitle} modalContent={frame1?.modalContent} />

        <img className='leaf' src="/leaf.png" />
        <img className='star' src="/star.png" />
        <img className="lotus" src="/lotus.png" />
    
      <Arrow className="nav-arrow-left" link={`/art/${id}/performance`} src="left" />
      </div>
    </div>
  );
};

export default Artist;