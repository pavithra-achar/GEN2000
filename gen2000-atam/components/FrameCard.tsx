import {useState} from "react";

interface FrameCardProps {
    frameSrc: string;
    imageSrc: string;
    alt?: string;
    modalTitle?: string;
    modalContent: string;
    className: string;
    innerClassName: string;
}

const FrameCard = (props: FrameCardProps) => {
    const [open, setOpen] = useState(false);
    return (
    <>
       <div className={`cursor-pointer z-10 ${props.className}`}
            onClick={() => setOpen(true)}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                    src={props.imageSrc}
                    alt={props.alt}
                    className={`object-cover ${
                    props.innerClassName || "w-[80%] h-[75%]"
                    }`}
                />
            </div>
            <img
                src={props.frameSrc}
                alt="frame"
                className="relative z-10 w-full h-full pointer-events-none"
            />
        </div>
       {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
    
            <div className="relative w-[90%] max-w-lg p-6 rounded-xl shadow-2xl 
                    bg-[#f4efe6] border-4 border-[#e5d9c8]">

            <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-[#5c4a36] text-2xl font-semibold transition"
            >×</button>

      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <img src="/lotus.png" className="w-15 pointer-events-none" />
      </div>

      <h2 className="text-2xl font-bold mb-3">
        {props.modalTitle}
      </h2>

      <p className="text-[#5c4a36]">
        {props.modalContent}
      </p>

    </div>
  </div>
)}
    </>
  );
}

export default FrameCard;