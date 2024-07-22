import ThemeSwitcher from "./components/ThemeSwitcher";
import AccentColor from "./components/AccentColor";
import Content from "./components/Content";
import { FaGithub } from "react-icons/fa6";

function App() {
  return (
    <div className="w-full lg:h-screen flex flex-col bg-white dark:bg-zinc-900 text-black dark:text-white ">
      <header className="h-16 flex flex-row justify-end px-8">
        <ThemeSwitcher />
        <AccentColor />
      </header>
      <Content />
      <footer className="h-16 flex justify-center items-center flex-col">
        <a href="https://github.com/42nao">
          <div className="flex-row flex items-center mb-1">
            <FaGithub size={20} />
            <p className="ml-1 text-s">/42nao</p>
          </div>
        </a>
        <div>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-accent">smn.bio</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
