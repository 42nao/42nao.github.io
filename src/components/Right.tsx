import { useState } from "react";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Music from "../pages/Music";
import { FaGithub } from "react-icons/fa";

export default function Right() {
  const [current, setCurrent] = useState(0);
  const [opacity, setOpacity] = useState(100);
  const pages = [<AboutMe />, <Projects />, <Music />];

  const change = (numb: number) => {
    setOpacity(0);

    setTimeout(() => {
      setCurrent(numb);
      setOpacity(100);
    }, 400);
  };

  return (
    <div
      className="h-full w-full flex flex-col justify-center"
      onWheel={(e) => {
        if (window.innerWidth < 1024) return;

        if (current + 1 > pages.length - 1 && e.deltaY > 0) return;
        if (current - 1 < 0 && e.deltaY < 0) return;
        if (e.deltaY > 0) {
          change(current + 1);
        } else {
          change(current - 1);
        }
      }}
    >
      <h2 className="font-sans font-medium text-xl dark:text-gray-300 text-gray-800">
        hey there!
      </h2>
      <div className="flex flex-row justify-start items-center">
        <h1 className="font-sans font-bold text-5xl text-accent mb-1">
          smn.bio
        </h1>
      </div>
      <h3 className="font-code font-medium dark:text-gray-300 text-gray-800">
        java ● sql ● python ● typescript
      </h3>

      <div className="mt-10 flex flex-row">
        <div
          className="w-full transition-all duration-500 ease-in-out"
          style={{
            opacity: opacity,
          }}
        >
          {pages.map((page, index) => {
            if (current === index) {
              return (
                <div className="lg:h-[300px]" key={index}>
                  {page}
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="flex flex-col items-center justify-center w-10">
          {pages.map((_, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  change(index);
                }}
                className="cursor-pointer w-[15px] h-[15px] mb-4 pt-8"
              >
                <div
                  className={
                    "transition-all duration-500 ease-in-out w-[10px] h-[10px] rounded-full border-2 border-zinc-300 dark:border-zinc-600 " +
                    (current === index
                      ? "bg-zinc-300 dark:bg-zinc-600 h-[20px]"
                      : "")
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
