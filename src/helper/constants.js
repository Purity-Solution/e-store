import { MdShoppingCart } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { GoSearch } from "react-icons/go";
export const navbarData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "our products",
    link: "/products",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    icon: <MdShoppingCart />,
    links: "/cart",
  },
  {
    icon: <GoSearch />,
    links: "/search",
  },
  {
    icon: <GoPerson />,
    links: "/log",
  },
];
