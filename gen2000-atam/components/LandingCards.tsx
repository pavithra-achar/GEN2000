import { Link } from "react-router-dom";

interface CardItem {
  title: string;
  path: string;
}

interface LandingCardsProps {
  items: CardItem[];
}

const LandingCards = ({ items }: LandingCardsProps) => {
  return (
    <div className="flex justify-center items-center gap-8 max-w-5xl">
      {items.map((item, i) => (

        <Link key={i} to={item.path}>
          <div className="w-48 h-45 bg-[#fdeed2] border-3 border-[#5c4a36] 
              flex items-center justify-center text-center text-[#5c4a36] bold 
              text-wrap text-lg
              font-extrabold rounded-xl shadow-sm transition 
              hover:scale-105 hover:shadow-md cursor-pointer">
            {item.title}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <img src="/lotus.png" className="w-18 pointer-events-none" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LandingCards;