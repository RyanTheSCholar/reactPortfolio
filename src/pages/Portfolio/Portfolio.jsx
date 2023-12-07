import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable"; // Import the Swipeable HOC
import { wrap } from "@popmotion/popcorn";
import projectData from "../../../data/data";
import { BsGithub } from "react-icons/bs";
import { MdTransitEnterexit } from "react-icons/md";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { Button, Card, Tooltip } from "@nextui-org/react";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

function Portfolio() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const paginate = (newDirection) => {
    setPage(page + newDirection);
    setDirection(newDirection);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
    swipeDuration: 500,
  });

  const projectIndex = wrap(0, projectData.length, page);

  return (
    <Card
      className="flex flex-row justify-center items-center h-[100vh] portfolio-theme bg-Yellow-200 flex-shrink-1"
      {...handlers}
    >
      {!isMobile && (
        <Button
          className="next portfolio-theme bg-Blue-900 text-Yellow-200 m-2"
          onClick={() => paginate(-1)}
        >
          <HiArrowSmLeft className="w-[50px] h-[50px]" />
        </Button>
      )}
      <div>
        <h1 className="flex justify-center text-Blue-900 font-bold text-[26px] items-center">
          {projectData[projectIndex].projectName}
        </h1>
        {isMobile && (
          <h2 className="flex justify-center text-Blue-900">
            Swipe right or left for more content
          </h2>
        )}
        <AnimatePresence initial={false} custom={direction} className="">
          <motion.img
            key={page}
            src={projectData[projectIndex].image}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            className="my-3 w-[75rem] h-[40rem]"
          />
        </AnimatePresence>
        <div className="flex justify-center items-center">
          <Tooltip
            placement="bottom"
            content="Repository"
            className="portfolio-theme bg-Blue-900 text-Yellow-200 rounded-full"
          >
            <a
              href={projectData[projectIndex].githubRepo}
              className="flex justify-center"
              rel="noreferrer"
              target="_blank"
            >
              <BsGithub className="portfolio-theme text-Blue-900 hover:text-Gray-200 w-[50px] h-[50px]" />
            </a>
          </Tooltip>
          <Tooltip
            placement="bottom"
            content="Explore"
            className="portfolio-theme bg-Blue-900 text-Yellow-200 rounded-full"
          >
            <a
              href={projectData[projectIndex].linkToWebsite}
              className="flex justify-center mx-3"
              rel="noreferrer"
              target="_blank"
            >
              <MdTransitEnterexit className="portfolio-theme text-Yellow-200 hover:bg-Gray-200 w-[50px] h-[50px] bg-Blue-900 rounded-full" />
            </a>
          </Tooltip>
        </div>
      </div>
      {!isMobile && (
        <Button
          className = "prev portfolio-theme bg-Blue-900 text-Yellow-200 m-2"
          onClick={() => paginate(1)}
        >
          <HiArrowSmRight className="w-[50px] h-[50px]" />
        </Button>
      )}
    </Card>
  );
}

export default Portfolio;
