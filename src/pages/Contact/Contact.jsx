import { Card, Input, Textarea, Button } from "@nextui-org/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [email, setEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);

    console.log("Email:", email);
    console.log("Name:", userName);
    console.log("Message:", message);
    console.log("Form Data:", e.target);
try {
  const result = await emailjs
      .sendForm(
        "service_s9bvlgd",
        "template_56hi13b",
        e.target,
        "uyrzLuoxWyi-ZDbaf"
      ); 
      console.log(result.text);
          setEmail("");
          setuserName("");
          setMessage("");
          setIsSubmitting(false);
} catch (error) {
    console.log(error.text);
} finally{
    setIsSubmitting(false);
}
  };
  return (
    <Card className="portfolio-theme flex w-full h-[100vh] bg-Yellow-200 rounded-none items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-[32px] font-bold text-Blue-900 flex justify-center">
          Get in touch with me here!
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <Input
              isRequired
              type="email"
              label="Email"
              placeholder="Enter your email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              classNames={{
                label: "text-Blue-900 dark:text-white/90 font-bold",
                input: [
                  "bg-transparent",
                  "text-Blue-900 dark:text-white/90 font-bold",
                  "placeholder:text-Blue-900/80 dark:placeholder:text-white/60 placeholder:font-bold",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-Blue-900",
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
              name="userName"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              classNames={{
                label: "text-Blue-900 dark:text-white/90 font-bold",
                input: [
                  "bg-transparent",
                  "text-Blue-900 dark:text-white/90",
                  "placeholder:text-Blue-900/80 dark:placeholder:text-white/60 font-bold",
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
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              classNames={{
                label: "text-Blue-900 dark:text-white/90 font-bold",
                input: [
                  "bg-transparent",
                  "text-Blue-900 dark:text-white/90",
                  "placeholder:text-Blue-900/80 dark:placeholder:text-white/60 font-bold",
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
            <Button
              className="w-[15vw] bg-Blue-900 text-Yellow-200 hover:bg-Blue-600 hover:border-3 border-Blue-200"
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
}
