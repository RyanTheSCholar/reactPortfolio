import { Card, ScrollShadow, Tooltip } from "@nextui-org/react";
import Avatar from "../../assets/Avatar2.jpeg";
import HoverAvatar from "../../assets/HoverAvatar2.jpeg";
import { Content } from "../../components/Content/Content";
import { useState, useEffect } from "react";
export default function About() {
  const [hover, setHover] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const change = () => {
      if (window.innerWidth <= 425) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", change);
    return () => window.removeEventListener("resize", change);
  }, []);
  return (
    <Card className="portfolio-theme flex w-full h-[100vh] bg-Yellow-200 rounded-none pb-5 items-center justify-center">
      <div className="flex w-1/2 items-center justify-center mb-3">
        <Tooltip
          content="For the meme"
          className="portfolio-theme bg-Blue-900 text-Yellow-200 rounded-full"
        >
          <img
            src={hover ? HoverAvatar : Avatar}
            alt="Ryan's Avatar"
            className={
              isMobile ? "w-[15vw] rounded-full" : "w-[50vw] rounded-full mb-15"
            }
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          />
        </Tooltip>
      </div>
      <div
        className={
          isMobile
            ? "flex items-center justify-center w-[50vw]"
            : "flex items-center justify-center w-[50vw]"
        }
      >
        <Tooltip
          content="Scroll for more"
          className="portfolio-theme bg-Blue-900 text-Yellow-200 rounded-full"
        >
          <ScrollShadow
            hideScrollBar
            size={100}
            orientation="horizontal"
            className={
              isMobile
                ? "max-w-[500px] max-h-[400px] text-Blue-900 text-center w-[50vw] font-bold"
                : "max-w-[600px] max-h-[300px] text-Blue-900 text-center w-[60vw] font-bold"
            }
          >
            <Content />
          </ScrollShadow>
        </Tooltip>
      </div>
    </Card>
  );
}
