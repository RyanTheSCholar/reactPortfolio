import { Card } from "@nextui-org/react";
import { BsGithub } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
export default function Footer() {
  return (
    <Card className="portfolio-theme bg-Blue-900 w-full h-[12vh] flex flex-row justify-center items-center rounded-none">
        <a href="https://github.com/RyanTheSCholar" target="_blank" rel="noreferrer" className="mx-3 ">
          <BsGithub className="text-Gray-200 w-[75px] h-[75px] hover:text-Yellow-300" />
        </a>
        <a href="https://www.linkedin.com/in/ryan-business-bowen/" target="_blank" rel="noreferrer" className="mx-3">
          <BiLogoLinkedin className="bg-Gray-200 text-Blue-900 w-[75px] h-[75px] rounded-full hover:bg-Yellow-300" />
        </a>
    </Card>
  );
}
