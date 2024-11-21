import { FaDog } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { FaShieldDog } from "react-icons/fa6";
import { GiSniffingDog } from "react-icons/gi";

const MenuItemList = [
    {
        id: 0,
        title: "Labrador",
        link: "/breed/labrador",
        icon: <FaDog />
    },
    {
        id: 1,
        title: "Pomeranian",
        link: "/breed/pomeranian",
        icon: <GiSittingDog />

    },
    {
        id: 2,
        title: "Doberman",
        link: "/breed/doberman",
        icon: <FaShieldDog />

    },
    {
        id: 3,
        title: "Husky",
        link: "/breed/husky",
        icon: <GiSniffingDog />
    }
];

export { MenuItemList };
