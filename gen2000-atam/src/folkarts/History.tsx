import { useParams } from "react-router-dom";
import folkarts from "../assets/folkarts/info.json";
import Background from "../../components/Background";
import FrameCard from "../../components/FrameCard";

const History = () => {
  var { id } = useParams();
  if (id == null) {
    id = "0";
  }

  const folkart = folkarts.folkarts.at(parseInt(id));

  return (
    <div className="page bg relative">
      {folkart?.name}

      <Background />
      <img className="history-label" src="../../public/label.png" />
      <img className="history-bottom-left" src="../../public/frame2.png" />
      <img className="history-top-left" src="../../public/frame2.png" />
      <FrameCard
        frameSrc="/frame3.png"
        imageSrc={folkart?.sections?.history.content.frame1.imageSrc}
        alt={folkart?.sections?.history.content.frame1.alt}
        modalTitle={folkart?.sections?.history.content.frame1.modalTitle}
        modalContent={folkart?.sections?.history.content.frame1.modalContent}
        className="history-center"
        innerClassName=""
      />
      <img className="history-center" src="../../public/frame3.png" />
      {/* <img className="history-top-right" src='../../public/frame1.png'/>  */}

      {/* <FrameCard
        frameSrc="/frame1.png"
        imageSrc={folkart?.sections?.history.content.frame2.imageSrc}
        alt={folkart?.sections?.history.content.frame2.alt}
        modalTitle={folkart?.sections?.history.content.frame2.modalTitle}
        modalContent={folkart?.sections?.history.content.frame2.modalContent}
        className="history-top-right"
        innerClassName=""
      /> */}
      <img className="intro-loopy" src="../../public/loopy.png" />
      <img className="history-loopy" src="../../public/loopy.png" />
      <img
        className="sparkle history-sparkle-left"
        src="../../public/sparkle.png"
      />
      <img
        className="sparkle history-sparkle-right"
        src="../../public/sparkle.png"
      />
      <img className="history-star" src="../../public/star.png" />
      <img className="history-flower" src="../../public/flower.png" />
    </div>
  );
};

export default History;
