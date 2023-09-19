import { Card, ScrollShadow, Tooltip} from "@nextui-org/react";
import Avatar from "../../assets/Avatar1.jpeg";
import { Content } from "../../components/Content/Content";
export default function About() {
  return (
    <Card className="portfolio-theme flex w-full h-[100vh] bg-Yellow-200 rounded-none pb-5 items-center justify-center">
      <div className="flex w-1/2 items-center justify-center m-3">
        <img
          src={Avatar}
          alt="Ryan's Avatar"
          className=" w-[15vw] rounded-full"
        />
      </div>
      <div className="flex items-center justify-center w-1/2 ">
        <Tooltip content="Scroll for more" className="portfolio-theme bg-Blue-900 text-Yellow-200 rounded-full">
          <ScrollShadow 
        size={100}
      orientation="horizontal" 
      className="max-w-[500px] max-h-[400px] text-Blue-900 text-center w-[50vw] font-bold">
        <Content/>
      </ScrollShadow>  
        </Tooltip>
      </div>
    </Card>
  );
}