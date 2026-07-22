import {
  LucideCpu,
  Sun,
  UserRound,
  MenuIcon,
  Search,
  XIcon,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";


const Navbar = () => {
  const [openPanel, setOpenPanel] = useState(null);
  const searchRef = useRef(null);

  const toggle = (id) => {
    setOpenPanel((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleClicks = (e) => {
      if (
        !e.target.closest("#menuButton, #searchButton, .search-box, .nav-panel")
      ) {
        setOpenPanel(null);
      }
      if (e.target.closest("#searchButton")) {
        searchRef.current?.focus();
      }
    };
    document.addEventListener("click", handleClicks);
    return () => {
      document.removeEventListener("click", handleClicks);
    };
  }, []);


  const listItems = [
    { label: "home", link: "" },
    { label: "Jobs", link: "" },
    { label: "Notifications", link: "" },
    { label: "About", link: "" },
  ];

  const ActionButtons = [
    {
      id: "themeButton",
      ariaLabel: "Theme Toggle Button",
      icon: Sun,
      onClick: undefined,
    },
    {
      id: "searchButton",
      ariaLabel: "Search Button",
      icon: Search,
      onClick: () => toggle("searchButton"),
    },
    {
      id: "userButton",
      ariaLabel: "User Profile Button",
      icon: UserRound,
      onClick: undefined,
    },
    {
      id: "menuButton",
      ariaLabel: "Menu Toggle Button",
      icon: openPanel === "menuButton" ? XIcon : MenuIcon,
      onClick: () => toggle("menuButton"),
    },
  ];

  return (
    <nav className="nav-bar items-center bg-[#131313] border-b border-neutral-800">
      <div className="flex items-center gap-3 px-2">
        <LucideCpu className="text-emerald-400 w-6 h-6"></LucideCpu>
        <h3 className="text-white font-bold text-lg tracking-wide">
          Career Match
        </h3>
      </div>
      <div className="flex items-center gap-7">
        <ul
          className={`text-slate-500 font-medium text-sm nav-panel ${openPanel === "menuButton" ? "open" : ""}`}
        >
          {listItems.map((fields) => (
            <li key={fields.label}>
              <a
                className="transition-colors hover:text-white active:text-white cursor-pointer"
                href={fields.link}
              >
                {fields.label}
              </a>
            </li>
          ))}
        </ul>
        <input
          name="search"
          type="search"
          ref={searchRef}
          placeholder="Search"
          className={`px-3 py-1.5 bg-[#1e1e1e] text-white text-sm rounded-lg outline-none border border-neutral-700 focus:border-emerald-400 search-box ${openPanel === "searchButton" ? "open" : ""}`}
        />
      </div>
      <div className="flex flex-row gap-4">
        {ActionButtons.map((fields) => (
          <button
            key={fields.id}
            type="button"
            aria-label={fields.ariaLabel}
            id={fields.id}
            className="text-slate-500 cursor-pointer hover:text-white"
            onClick={fields.onClick}
          >
            <fields.icon className="pointer-events-none" />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
