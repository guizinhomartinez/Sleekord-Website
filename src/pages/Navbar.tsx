import "./CSS/App.css";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function DropDownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-9 w-12 border-none shadow-md" variant="secondary">
          <Menu />
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

function Navbar() {
  let name = "Sleekord";
  if (Math.floor(Math.random() * 100) + 1 === 34) {
    name = "Boo";
  }

  const nav = document.getElementById(".navbar");
  window.onscroll = function () {
    if (nav) {
      if (document.body.scrollTop >= 200) {
        nav.classList.remove("dark:bg-[#303030]", "bg-white");
      } else {
        nav.classList.add("dark:bg-[#303030]", "bg-white");
      }
    }
  };

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
              <Github />
              Source Code
            </Button>
          </Link>
          <DropDownMenu />
        </div>
      </div>
    </>
  );
}

export default Navbar;