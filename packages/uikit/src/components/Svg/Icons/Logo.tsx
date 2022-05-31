import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* <path d="M2.82031 11.8494L26.5038 0L47.9317 11.8494V28.4906L26.5038 41.3521L2.82031 28.4906V11.8494Z" fill="white"/>
<path d="M11.2786 14.7898L26.0807 7.51855L39.4732 14.7898V25.0014L26.0807 32.8937L11.2786 25.0014V14.7898Z" fill="#1F152D"/>
<path d="M26.0728 14.6332L24.1671 40.0793L5.25097 29.3839L26.0728 14.6332Z" fill="white"/> */}
    </svg>
  );
};

export default Icon;
