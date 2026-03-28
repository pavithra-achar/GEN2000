import { useParams } from 'react-router-dom';
import folkarts from "../assets/folkarts/info.json";
import Background from '../../components/Background';

const PresentDay = () => {
    var { id } = useParams();
    if(id == null) {
        id = "0";
    }

    return (
        <div className='page bg present-day'>{folkarts.folkarts.at(parseInt(id))?.name}
    
      <Background />
      <div className='relative'>
         <img className='label' src="/label-tilt.png"/>
         <img className='frame3' src="/frame3.png"/>
         <img className='frame2' src="/frame2.png"/>
         <img className='frame1' src="/frame1.png"/>
         <img className="lotus"src="/lotus.png"/>
         
         <img className='star' src="/star.png"/>
         <img className='leaf'src="/leaf.png"/>
         <img className='arrow' src="/arrow.png"/>

         <img className='loopy' src="/loopy.png"/>
         
      </div>
    </div>
    )
}

export default PresentDay;