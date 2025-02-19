import "./CSS/App.css";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { useEffect } from "react";

function DropDownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-9 w-12 border-none shadow-md" variant="secondary">
          <Menu className="dark:fill-white fill-black" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-10 mt-1">
        <DropdownMenuGroup>
          <Link to="/changelogs">
            <DropdownMenuItem className="cursor-pointer">
              Changelogs
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ModeToggle() {
  const root = window.document.documentElement;
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const getThemeValue = localStorage.getItem('theme');

  useEffect(() => {
    root.classList.remove('dark', 'light');
    if (getThemeValue === 'system') {
      root.classList.add(prefersDarkScheme.matches ? 'dark' : 'light');

      prefersDarkScheme.addEventListener('change', () => root.classList.add(prefersDarkScheme.matches ? 'dark' : 'light'));

      return () => {
        prefersDarkScheme.removeEventListener('change', () => root.classList.add(prefersDarkScheme.matches ? 'dark' : 'light'));
      }
    } else {
        root.classList.add(getThemeValue || 'light');
    }
  }, [getThemeValue]);

  const setTheme = (theme: string) => {
    console.log(getThemeValue);
    localStorage.setItem('theme', theme);
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function Navbar() {
  let name = "Sleekord";
  if (Math.floor(Math.random() * 100) + 1 === 34) {
    name = "Boo";
  }

  return (
    <>
      <div className="flex items-center navbar fixed h-12 sm:px-10 px-5 z-50 transition-all duration-300 bg-gradient-to-t from-transparent dark:to-neutral-800 to-neutral-100">
        <div className="flex gap-2 items-center mr-auto">
          <Link to="/" className="hover:underline">
            <p id="name">{name}</p>
          </Link>
        </div>
        <div className="flex gap-2 ml-auto">
          <Link to="https://github.com/guizinhomartinez/custom-discord-theme">
            <Button className="border-none bg-secondary shadow-md" variant="secondary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" style={{ width: '16px', height: '16px' }} className='dark:fill-white fill-black'>
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              Source Code
            </Button>
          </Link>
          <DropDownMenu />
          <ModeToggle />
        </div>
      </div>
    </>
  );
}

export default Navbar;