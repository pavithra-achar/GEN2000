import { useParams } from 'react-router-dom';
import folkarts from "../assets/folkarts/info.json";
import Background from '../../components/Background';

const History = () => {
  var { id } = useParams();
  if(id == null) {
    id = "0";
  }

  return (
    <div className='page bg relative'>{folkarts.folkarts.at(parseInt(id))?.name}
    
      <Background />
      <img className="history-label" src='../../public/label.png'/>
      <img className="history-bottom-left" src='../../public/frame2.png'/>
      <img className="history-top-left" src='../../public/frame2.png'/> 
      <img className="history-center" src='../../public/frame3.png'/> 
      <img className="history-top-right" src='../../public/frame1.png'/> 
      <img className="intro-loopy" src="../../public/loopy.png"/>
      <img className="history-loopy" src="../../public/loopy.png"/>
      <img className="sparkle history-sparkle-left" src="../../public/sparkle.png"/>
      <img className='sparkle history-sparkle-right' src="../../public/sparkle.png"/>
      <img className="history-star" src="../../public/star.png"/>
      <img className="history-flower" src="../../public/flower.png"/>

    </div>
  )
}

export default History