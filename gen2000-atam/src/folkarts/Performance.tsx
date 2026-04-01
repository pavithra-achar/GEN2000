import React from "react";
import { useParams } from "react-router-dom";
import folkarts from "../assets/folkarts/info.json";
import Background from "../../components/Background";
import FrameCard from "../../components/FrameCard";

const Performance = () => {
  var { id } = useParams();
  if (id == null) {
    id = "0";
  }

  const folkart = folkarts.folkarts.at(parseInt(id));

  return (
    <div className="page bg relative">
      {folkart?.name}

      <Background />
      <img className="perf-label" src="../../public/label.png" />
      <img className="perf-top-left" src="../../public/frame2.png" />
      <img className="perf-top-right" src="../../public/frame2.png" />
      <img className="perf-bottom-right" src="../../public/frame3.png" />
      {/* <img className="perf-bottom-left" src='../../public/frame1.png'/>  */}
      <FrameCard
        frameSrc="/frame1.png"
        imageSrc={folkart?.sections?.performance.content.frame1.imageSrc}
        alt={folkart?.sections?.performance.content.frame1.alt}
        modalTitle={folkart?.sections?.performance.content.frame1.modalTitle}
        modalContent={
          folkart?.sections?.performance.content.frame1.modalContent
        }
        className="perf-bottom-left"
        innerClassName=""
      />
      <img className="intro-loopy" src="../../public/loopy.png" />
      <img className="perf-loopy" src="../../public/loopy.png" />
      <img
        className="sparkle perf-sparkle-left"
        src="../../public/sparkle.png"
      />
      <img
        className="sparkle perf-sparkle-right"
        src="../../public/sparkle.png"
      />
      <img className="perf-star" src="../../public/star.png" />
      <img className="perf-lotus" src="../../public/lotus.png" />
    </div>
  );
};

export default Performance;
