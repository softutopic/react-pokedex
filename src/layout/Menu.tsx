import Logo from "../assets/Logo.png";
import { NavLink, Outlet } from "react-router-dom";

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
  return (
    <>
      <nav className="w-screen bg-[#F5DB13] p-4 drop-shadow-md absolute">
        <div className="flex flex-row justify-between items-center">
          <img src={Logo} alt="Pokemón" className=" w-[157px] h-[63px] ml-5 " />
          <div className="flex flex-row justify-evenly w-[60%] list-none">
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
      <Outlet />
    </>
  );
};
