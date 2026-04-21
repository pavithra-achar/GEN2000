import { useParams } from 'react-router-dom';
import LandingCards from '../components/LandingCards'


const Landing = () => {
    var { id } = useParams();
        if(id == null) {
            id = "0";
        }

    const cards = [
        { title: "Intro", path: `/art/${id}/intro` },
        { title: "History", path: `/art/${id}/history` },
        { title: "Performance Elements", path: `/art/${id}/performance` },
        { title: "Present Day", path: `/art/${id}/presentDay` },
        { title: "Artists", path: `/art/${id}/artists` },
    ];

    return (
        <div className='bg page'>
            <LandingCards items={cards} />
        </div>
  )
}

export default Landing