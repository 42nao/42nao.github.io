import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import Left from "./Left";
import Right from "./Right";
import { useEffect, useState } from "react";

function Content() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  if (size > 1024) {
    return (
      <PanelGroup
        className="w-screen h-full flex-1 px-5"
        direction="horizontal"
        autoSaveId="layoutpersist"
      >
        <Panel
          defaultSize={40}
          minSize={size > 1500 ? 20 : 40}
          className="flex justify-center items-center"
        >
          <Left />
        </Panel>
        <div className="flex justify-center items-center h-full ">
          <PanelResizeHandle className="w-[5px] rounded-xl h-[50px] mx-8 bg-zinc-300 dark:bg-zinc-800" />
        </div>
        <Panel
          defaultSize={60}
          minSize={40}
          className="flex justify-center items-center"
        >
          <Right />
        </Panel>
      </PanelGroup>
    );
  } else {
    return (
      <div className="flex flex-col w-full px-8 gap-10">
        <Left />
        <Right />
      </div>
    );
  }
}

export default Content;
