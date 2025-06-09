import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

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

  return <div className="w-100 min-w-min">{renderedItems}</div>;
}
export default Accordion;
