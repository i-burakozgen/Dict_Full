import { FaBookBookmark as DictionaryIcon } from "react-icons/fa6";
import { IoIosInformationCircleOutline as AboutIcon } from "react-icons/io";
import { AILogoDark } from "../../assets/index.jsx";
import { AILogoLight } from "../../assets/index.jsx";
export const sideBarItems = () => [
    {
      iconLight: DictionaryIcon,
      iconDark: DictionaryIcon ,
      text: "sözlük",
      link: "dictionary",
      colorDark: "#FFD700"
    },
    {
      iconLight: AboutIcon,
      iconDark: AboutIcon,
      text: "About",
      link: "about",
      colorDark: "#FFD700",

    },
    {
      iconLight: AILogoLight,
      iconDark: AILogoDark,
      text: "AI translate",
      link: "ai-translate",
    }
  ];
