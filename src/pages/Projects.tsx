import React from "react";

function Projects() {
  const projects = [
    {
      title: "work",
      text: "junior software developer for a big stock exchange company in germany",
    },
    {
      title: "hobby",
      text: "ex-volunteer developer at lockcard & notenapp.",
    },
    {
      title: "others",
      text: "minecraft plugins, react native apps, discord bots, some database stuff (oracle, mariadb, etc.)",
    },
  ];

  return (
    <div className="flex flex-col justify-center">
      {projects.map((project, index) => {
        return (
          <div className="mb-6 flex flex-row items-center gap-2 bg-zinc-600/5 dark:bg-white/5 p-4 w-[75%] rounded-lg">
            <p className="font-sans font-semibold text-accent mr-1">
              {project.title}:
            </p>
            <p>{project.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
