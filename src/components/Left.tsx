import React from "react";
import "./Left.scss";
import { FaCode } from "react-icons/fa6";

import Icon from "../assets/icon.webp";

export default function Left() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="shape">
        <div className="flex w-full justify-start">
          <FaCode className="codeobj text-zinc-700 dark:text-white" size={50} />
        </div>
        <div className="flex justify-center items-center">
          <img alt="" src={Icon} />
        </div>
        <div className="flex w-full justify-end">
          <FaCode className="codeobj text-zinc-700 dark:text-white" size={50} />
        </div>
      </div>
    </div>
  );
}
