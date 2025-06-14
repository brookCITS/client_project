// Libraries
import React, { useRef, ReactNode } from "react";

type TextCardProps = {
  icon: string;
  title: string;
  value: string;
};

const SmallTile: React.FC<TextCardProps> = ({
  icon,
  title,
  value,
}) => {


  return (
    <div className='tile-small'>
        <h1 className="tile-small-icon"><i className={icon}></i></h1>
        <span className="tile-small-text">
          <p>{title}</p>
          <h3>{value}</h3>
        </span>
    </div>
  );
};

export default SmallTile;
