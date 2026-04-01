import { useParams } from "react-router-dom";
import folkarts from "../assets/folkarts/info.json";
import Background from "../../components/Background";
import FrameCard from "../../components/FrameCard";

const Artist = () => {
  var { id } = useParams();
  if (id == null) {
    id = "0";
  }

  const folkart = folkarts.folkarts.at(parseInt(id));

  return (
    <div className="page bg artist">
      {folkart?.name}

      <Background />
      <div className="relative">
        <img className="master-name" src="/master-name.png" />

        <FrameCard
          frameSrc="/frame1.png"
          imageSrc={
            folkart?.sections?.artists.content.frame1.imageSrc
          }
          alt={folkart?.sections?.artists.content.frame1.alt}
          modalTitle={
            folkart?.sections?.artists.content.frame1
              .modalTitle
          }
          modalContent={
            folkart?.sections?.artists.content.frame1
              .modalContent
          }
          className="artist-frame"
          innerClassName=""
        />
        <img className="artist-frame" src="/frame1.png" />
        <img className="leaf" src="/leaf.png" />
        <img className="frame2" src="/frame2.png" />
        <img className="frame3" src="/frame2.png" />
        <img className="star" src="/star.png" />
        <img className="lotus" src="/lotus.png" />
      </div>
    </div>
  );
};

export default Artist;
