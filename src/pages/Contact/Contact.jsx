import { Card, Input, Textarea, Button } from "@nextui-org/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Card className="portfolio-theme flex w-full h-[100vh] bg-Yellow-200 rounded-none items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-[32px] font-bold text-Blue-900 flex justify-center">
          Get in touch with me here!
        </h1>
        <div>
          <Input
            isRequired
            type="email"
            label="Email"
            placeholder="Enter your email"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
              base: ["w-[50vw]", "my-3"],
            }}
            radius="lg"
          />
        </div>
        <div>
          <Input
            isRequired
            type="text"
            label="Name"
            placeholder="Enter your name"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
              base: ["w-[50vw]", "mb-3"],
            }}
            radius="lg"
          />
        </div>
        <div id="height">
          <Textarea
            isRequired
            type="input"
            label="Message"
            placeholder="Enter your message"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
              base: ["w-[50vw]", "mb-5"],
            }}
            radius="lg"
          />
        </div>
        <div className="flex justify-center">
          <Button className="w-[15vw] bg-Blue-900 text-Yellow-200 hover:bg-Blue-800">
            Send
          </Button>
        </div>
      </div>
    </Card>
  );
}
