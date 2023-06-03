import { BsDiscord } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillFacebook } from "react-icons/ai";

export const headerButton = [
  {
    text: "Join Discord",
    link: "https://discord.com/",
    icon: <BsDiscord className="mr-2" />,
  },
  {
    text: "Post to Twitter",
    link: "https://twitter.com/",
    icon: <AiFillTwitterCircle className="mr-2" />,
  },
  {
    text: "Share on Facebook",
    link: "https://facebook.com/",
    icon: <AiFillFacebook className="mr-2" />,
  },
];
