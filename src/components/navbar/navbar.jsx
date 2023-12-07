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
      name: "About",
    },
    {
      id: 2,
      path: "/Portfolio",
      name: "Portfolio",
    },
    {
      id: 3,
      path: "/Resume",
      name: "Resume",
    },
    {
      id: 4,
      path: "/Contact",
      name: "Contact",
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

      <NavbarContent
        className={
          isMobile
            ? "hidden sm:flex justify-start gap-2"
            : "hidden sm:flex justify-start gap-2 ml-20"
        }
      >
        {navtabItems
          .map((navItem) => (
            <NavbarItem
              key={navItem.id}
              className="portfolio-theme text-Yellow-200 font-bold flex mx-3"
            >
              <NavtabLink
                to={navItem.path}
                className={
                  currentPage === navItem.path
                    ? "nav-link active hover:text-Yellow-50 text-[26px]"
                    : "nav-link hover:text-Yellow-50 text-[26px]"
                }
              >
                {navItem.name}
              </NavtabLink>
            </NavbarItem>
          ))
          .slice(0, 4)}
      </NavbarContent>
      <NavbarMenu className="portfolio-theme bg-Blue-900 flex-col text-center py-20">
        {navtabItems
          .map((mobileNavItems) => (
            <NavbarMenuItem className="h-[75px]" key={mobileNavItems.id}>
              <NavtabLink
                className="w-full text-Yellow-200"
                to={mobileNavItems.path}
              >
                {mobileNavItems.name}
              </NavtabLink>
            </NavbarMenuItem>
          ))
          .slice(0, 4)}
        {/* <NavbarContent className ="flex-col">
        <NavbarMenuItem className="h-[75px]">
          <NavtabLink
            className="w-full text-Yellow-200"
            to="/"
            onClick={handleMenuItemClick}
          >About</NavtabLink>
        </NavbarMenuItem>
        <NavbarMenuItem className="h-[75px]">
          <NavtabLink
            className="w-full text-Yellow-200"
            to="/Portfolio"
            onClick={handleMenuItemClick}
          >Portfolio</NavtabLink>
        </NavbarMenuItem>
        <NavbarMenuItem className="h-[75px]">
          <NavtabLink
            className="w-full text-Yellow-200"
            to="/Resume"
            onClick={handleMenuItemClick}
          >Resume</NavtabLink>
        </NavbarMenuItem>
        <NavbarMenuItem className="h-[75px]">
          <NavtabLink
            className="w-full text-Yellow-200"
            to="/Contact"
            onClick={handleMenuItemClick}
          >Contact</NavtabLink>
        </NavbarMenuItem>
        </NavbarContent> */}
      </NavbarMenu>
    </Navbar>
  );
}
