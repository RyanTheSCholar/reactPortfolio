/* eslint-disable react/no-unknown-property */
import { Card } from "@nextui-org/react"
import CV from "../../assets/Resume.pdf"



export default function Resume() {
    return (
        <Card className="bg-Yellow-200">
            <div className=" bg-Yellow-200 flex justify-center">
              <embed src={CV} type="application/pdf" className="w-[1200px] h-[800px]"/>  
            </div>
        </Card>
    )
}