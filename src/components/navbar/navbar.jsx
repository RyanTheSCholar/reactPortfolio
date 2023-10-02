/* eslint-disable react/prop-types */
import { useLocation, Link as NavtabLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { FaCode } from "react-icons/fa";
import "./navbar.css";
import { useState, useEffect } from "react";
// import ContactMeModal from "../modals/contactMeModal";
// import ContactMeModalMobile from "../modals/contactMeModalMobile";

export default function Navtabs({ isMenuOpen, setIsMenuOpen }) {
  const currentPage = useLocation().pathname;
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const change = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", change);
    return () => window.removeEventListener("resize", change);
  }, []);

  const navtabItems = [
    {
      id: 1,
      path: "/",
      pathname: "About",
    },
    {
      id: 2,
      path: "/Portfolio",
      pathname: "Portfolio",
    },
    {
      id: 3,
      path: "/Resume",
      pathname: "Resume",
    },
    {
      id: 4,
      path: "/Contact",
      pathname: "Contact",
    },
  ];
  const handleMenuItemClick = () => {
    // This function will be used to close the menu
    setIsMenuOpen(false);
  };
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="portfolio-theme bg-Blue-900 h-[5rem] w-[100%]"
      id="navtab"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden portfolio-theme text-Yellow-500 gap-2"
        />
        <NavbarBrand className="">
          <FaCode className="portfolio-theme text-Yellow-200 text-[26px] hover:text-Yellow-50" />
          <p className="font-bold portfolio-theme text-Yellow-200 text-[26px] hover:text-Yellow-50 cursor-default">
            RB
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className={isMobile ? "hidden sm:flex justify-start gap-2" : "hidden sm:flex justify-start gap-2 ml-20"}>
        {navtabItems
          .map((navItem) => (
            <NavbarItem
              key={navItem.id}
              className="portfolio-theme text-Yellow-200 font-bold flex"
            >
              <NavtabLink
                to={navItem.path}
                className={
                  currentPage === navItem.path
                    ? "nav-link active hover:text-Yellow-50 text-[26px]"
                    : "nav-link hover:text-Yellow-50 text-[26px]"
                }
              >
                {navItem.pathname}
              </NavtabLink>
            </NavbarItem>
          ))
          .slice(0, 4)}
      </NavbarContent>
      <NavbarContent className="justify-center">
      </NavbarContent>
      <NavbarMenu className="gap-3 portfolio-theme bg-Blue-900">
        {navtabItems
          .map((mobileNavItems) => (
            <NavbarMenuItem key={mobileNavItems.id}>
              <NavtabLink
                className="w-full text-Yellow-200"
                to="/Portfolio"
                onClick={handleMenuItemClick}
              >
                {mobileNavItems.pathname}
              </NavtabLink>
            </NavbarMenuItem>
          ))}
      </NavbarMenu>
    </Navbar>
  );
}
