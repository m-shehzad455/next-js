import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { TbSettings } from "react-icons/tb";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(true);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className=" bg-blue-100 rounded-lg dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
        // <TbSettings className="text-blue-500 w-5 h-5" />
         <button className=" text-gray-700">Dark background</button>
      ) : (
        // <TbSettings className="text-blue-400 w-5 h-5" />
          <button className=" text-gray-700">Light background</button>
      )}
    </button>
  );
};

export default ThemeToggler;