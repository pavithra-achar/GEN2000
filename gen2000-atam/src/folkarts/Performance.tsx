import { useParams } from 'react-router-dom';
import folkarts from "../assets/folkarts/info.json";
import Background from '../../components/Background';
import FrameCard from '../../components/FrameCard';
import TextCard from '../../components/TextCard';
import Arrow from '../../components/Arrow';

const Performance = () => {
  var { id } = useParams();
  if(id == null) {
    id = "0";
  }

  const art = folkarts.folkarts.at(parseInt(id));
  const frame1 = art?.sections?.performance.content.frame1;
  const frame2 = art?.sections?.performance.content.frame2;
  const frame3 = art?.sections?.performance.content.frame3;
  const frame4 = art?.sections?.performance.content.frame4; 

  return (
    <div className='page bg relative'>{folkarts.folkarts.at(parseInt(id))?.name}
    
      <Background />
      <TextCard className="perf-label" titleclass="perf-title" title={"Performance Elements"} />
      {/* <img className="perf-label" src='../../public/label.png'/> */}
      {/* <img className="perf-top-left" src='../../public/frame2.png'/> */}
      <FrameCard
          frameSrc="/frame2.png"
          imageSrc={frame1?.imageSrc}
          alt={frame1?.alt}
          modalTitle={frame1?.modalTitle}
          modalContent={frame1?.modalContent}
          className="perf-top-left"
          innerClassName='rotate-5 skew-y-2 skey-x-2'
        />
       <FrameCard
          frameSrc="/frame2.png"
          imageSrc={frame2?.imageSrc}
          alt={frame2?.alt}
          modalTitle={frame2?.modalTitle}
          modalContent={frame2?.modalContent}
          className="perf-top-right"
          innerClassName='rotate-5 skew-y-2 skey-x-2'
          />
      <FrameCard
          frameSrc="/frame3.png"
          imageSrc={frame3?.imageSrc}
          alt={frame3?.alt}
          modalTitle={frame3?.modalTitle}
          modalContent={frame3?.modalContent}
          className="perf-bottom-right"
          innerClassName=''
          />
      <FrameCard
          frameSrc="/frame1.png"
          imageSrc={frame4?.imageSrc}
          alt={frame4?.alt}
          modalTitle={frame4?.modalTitle}
          modalContent="lorem ipsum..."
          className="perf-bottom-left"
          innerClassName=''
        />
      <img className="intro-loopy" src="../../public/loopy.png"/>
      <img className="perf-loopy" src="../../public/loopy.png"/>
      <img className="sparkle perf-sparkle-left" src="../../public/sparkle.png"/>
      <img className='sparkle perf-sparkle-right' src="../../public/sparkle.png"/>
      <img className="perf-star" src="../../public/star.png"/>
      <img className="perf-lotus" src="../../public/lotus.png"/>

      <Arrow className="nav-arrow-right" link={`/art/${id}/artists`} src="right" />
      <Arrow className="nav-arrow-left" link={`/art/${id}/presentDay`} src="left" />
    </div>
  )
}

export default Performance