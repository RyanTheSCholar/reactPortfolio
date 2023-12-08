/* eslint-disable react/no-unknown-property */
import { Card, Button } from "@nextui-org/react";
import CV from "../../assets/ResumeV6.pdf";
import { BsDownload } from "react-icons/bs";


export default function Resume() {  
    const serverSideMap = [
    {
        id: 1,
        name: "RESTful APIs"
    },
    {
        id: 2,
        name: "JSON"
    },
    {
        id: 3,
        name: "AJAX"
    },
    {
        id: 4,
        name: "MySQL"
    },
    {
        id: 5,
        name: "Sequelize"
    },
    {
        id: 6,
        name: "Node"
    },
    {
        id: 7,
        name: "GraphQL"
    },
  ];
  const ClientSideMap = [
    {
        id: 1,
        name: "HTML"
    },
    {
        id: 2,
        name: "CSS"
    },
    {
        id: 3,
        name: "Javascript"
    },
    {
        id: 4,
        name: "JQuery"
    },
    {
        id: 5,
        name: "Responsive Web Design"
    },
    {
        id: 6,
        name: "React"
    },
    {
        id: 7,
        name: "Bootstrap"
    },
    {
        id: 8,
        name: "Bulma"
    }
  ];
  const Download = () => {
    return (
      <div>
        <a
          href={CV}
          className="flex justify-center"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="bg-blue-900 hover:border-3 hover:bg-Blue-600 border-Blue-200 w-[200px] h-[50px] m-2">
            <div className=" flex-col">
              <h1 className="font-bold text-Yellow-200 text-xl">Resume</h1>
              {<BsDownload className="w-[100px] h-[30px] text-Yellow-200" />}
            </div>
          </Button>
        </a>
      </div>
    );
  };

  return (
    <Card className="bg-Yellow-200">
      <div className=" bg-Yellow-200 flex justify-center flex-col text-center">
        <h1 className="text-blue-900 font-bold text-3xl">
          Front-End Technologies
        </h1>
        {ClientSideMap.map((item) => (<div key={item.id}className="text-blue-900 font-bold" >
        <h2 className="py-2">{item.name}</h2>
      </div>))}
        <h1 className="text-blue-900 font-bold text-3xl">
          Back-End Technologies
        </h1>
        {serverSideMap.map((item) => (<div key={item.id}className="text-blue-900 font-bold" >
        <h2 className="py-2">{item.name}</h2>
      </div>))}
        <Download />
      </div>
    </Card>
  );
}
