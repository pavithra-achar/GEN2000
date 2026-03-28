import React from 'react'
import { useParams, Link } from 'react-router-dom';

const Landing = () => {
    var { id } = useParams();
        if(id == null) {
            id = "0";
        }
  return (
    <div className='page'>
        <Link to={"/art/"+id+"/intro"}>Intro</Link>
        <Link to={"/art/"+id+"/history"}>History</Link>
        <Link to={"/art/"+id+"/performace"}>Performance Elements</Link>
        <Link to={"/art/"+id+"/presentDay"}>Present Day</Link>
        <Link to={"/art/"+id+"/artists"}>Artists</Link>
    </div>
  )
}

export default Landing