import React from "react";
import { GoSun, GoMoon } from "react-icons/go";
export default function ThemeSwitcher() {
  const [theme, setTheme] = React.useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
    document.getElementsByTagName("body")[0].style.backgroundColor =
      newTheme === "dark" ? "#18181b" : "#fff";
  };

  return (
    <div className="flex items-center gap-2 p-2 rounded-lg">
      {theme === "light" ? <GoSun size={20} /> : <GoMoon size={20} />}{" "}
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={theme === "light"}
          onChange={() => {
            toggleTheme();
          }}
        />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-0 peer-focus:ring-accent dark:peer-focus:ring-accent dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-accent"></div>
      </label>
    </div>
  );
}
