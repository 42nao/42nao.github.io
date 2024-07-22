import React from "react";

function Music() {
  return (
    <div>
      <p className="mb-2 dark:text-zinc-300 text-zinc-600">
        some <span className="text-accent">favourites</span>: green day, linkin
        park, rowli, rhcp
      </p>
      <div className="flex flex-row">
        <div className="flex flex-col justify-start flex-wrap">
          <div className="mb-2">
            <iframe
              src="https://open.spotify.com/embed/track/5m9uiFH9sK5wxRZdfN62n9?utm_source=generator&theme=0"
              scrolling="no"
              className="overflow-hidden h-[100px] w-[80px] xl:w-[350px]"
              title="spotify-01"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://open.spotify.com/embed/track/6xTQUjMO5hZVrEpSNNo4eu?utm_source=generator&theme=0"
              scrolling="no"
              className="overflow-hidden h-[100px] w-[80px] xl:w-[350px]"
              title="spotify-01"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col justify-start flex-wrap ml-4">
          <div className="mb-2">
            <iframe
              src="https://open.spotify.com/embed/track/3ZffCQKLFLUvYM59XKLbVm?utm_source=generator&theme=0"
              scrolling="no"
              className="overflow-hidden h-[100px] w-[80px] xl:w-[350px]"
              title="spotify-01"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://open.spotify.com/embed/track/2aPTvyE09vUCRwVvj0I8WK?utm_source=generator&theme=0"
              scrolling="no"
              className="overflow-hidden h-[100px] w-[80px] xl:w-[350px]"
              title="spotify-01"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <p className="dark:text-zinc-300 text-zinc-600">
        ... and so <span className="text-accent">many more</span> [spotify:{" "}
        <a
          className="text-accent font-bold"
          href="https://open.spotify.com/user/2khveh903wr2hlgodcw0sexiv?si=8c58994284874a81"
          target="_blank"
          rel="noreferrer"
        >
          click
        </a>
        ]
      </p>
    </div>
  );
}

export default Music;
