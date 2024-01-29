import { useState } from "react";
import Logo from "../assets/Logo.png";
import { NavLink, Outlet } from "react-router-dom";
import ReactModal from "react-modal";

const menuItems = [
  {
    menu: "Home",
    index: 1,
    url: "/",
  },
  {
    menu: "Pokedex",
    index: 2,
    url: "/pokedex",
  },
  {
    menu: "Legendaries",
    index: 3,
    url: "/legendariess",
  },
  {
    menu: "Documentation",
    index: 4,
    url: "/documentation",
  },
];

export const Menu = () => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  return (
    <>
      <nav className="w-screen h-fit bg-[#F5DB13] p-4 drop-shadow-md absolute">
        <div className="flex flex-row justify-between items-center">
          <img
            src={Logo}
            alt="Pokemón"
            className="w-[58px] h-[22px] sm:w-[157px] sm:h-[63px] ml-5 "
          />

          <div className="md:hidden block" onClick={() => handleClick()}>
            <svg
              className="w-6 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>

          <div className="hidden md:flex md:flex-row justify-evenly w-[60%] list-none">
            {menuItems.map((menuItem) => (
              <li className={`text-[25px] font-normal`} key={menuItem.index}>
                <NavLink
                  to={menuItem.url}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                  }
                >
                  {menuItem.menu}
                </NavLink>
              </li>
            ))}
          </div>
        </div>
      </nav>
      <ReactModal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="bg-gradient-to-bl from-[#F5DB13] via-[#F5DB13] to-[#F2B807] p-8"
        appElement={document.getElementById("root") as HTMLElement}
        style={{
          overlay: {
            backgroundColor: "rgba(33, 33, 33, 0.5)",
          },
          content: {
            top: 0,
            left: 0,
            width: "100%",
            height: "fit-content",
            border: "none",
            borderRadius: "0px 0px 16px 16px",
          },
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <img src={Logo} alt="Pokemón" className="w-[138px] h-[51px]" />
        </div>
        <div className="text-center p-8">
          <ul>
            {menuItems.map((menuItem) => (
              <li
                className={`text-[25px] font-normal p-1`}
                key={menuItem.index}
              >
                <NavLink
                  onClick={() => {
                    setOpen(false);
                  }}
                  to={menuItem.url}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                  }
                >
                  {menuItem.menu}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </ReactModal>

      <Outlet />
    </>
  );
};
