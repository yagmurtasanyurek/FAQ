import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";
import Yellow from "../images/yellowstar.png";
import Blue from "../images/bluestar.png";
import Pink from "../images/pinkstar.png";
import Green from "../images/greenstar.png";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) return -1;
      else return nextIndex;
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const content = isExpanded && (
      <div className="bg-amber-100 rounded-md p-3 ">{item.content}</div>
    );

    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    const borderClasses = `border-2 border-black ${
      index !== 0 ? "border-t-0" : ""
    }`;

    return (
      <div
        key={item.id}
        className={` rounded-md ${borderClasses} bg-amber-100 p-3`}
      >
        <div
          onClick={() => handleClick(index)}
          className="flex justify-between items-center"
        >
          {item.label}
          {icon}
        </div>

        {content}
      </div>
    );
  });

  return (
    <div className=" relative w-140 min-w-min m-10">
      <img
        src={Yellow}
        alt="pixelated sparkle art"
        className="absolute -top-10 -left-10 w-8 h-8 image-pixel"
      />
      <img
        src={Blue}
        alt="pixelated sparkle art"
        className="absolute -bottom-10 -left-10 w-8 h-8 image-pixel"
      />
      <img
        src={Pink}
        alt="pixelated sparkle art"
        className="absolute -bottom-10 -right-10 w-8 h-8 image-pixel"
      />
      <img
        src={Green}
        alt="pixelated sparkle art"
        className="absolute -top-10 -right-10 w-8 h-8 image-pixel"
      />

      {renderedItems}
    </div>
  );
}
export default Accordion;
