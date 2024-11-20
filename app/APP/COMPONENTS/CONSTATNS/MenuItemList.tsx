import { FaDog } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { FaShieldDog } from "react-icons/fa6";
import { GiSniffingDog } from "react-icons/gi";

const MenuItemList = [
    {
        id: 0,
        title: "Rottweiler",
        link: "/breed/Rottweiler",
        icon: <FaDog />
    },
    {
        id: 1,
        title: "Pomeranian",
        link: "/breed/Pomeranian",
        icon: <GiSittingDog />

    },
    {
        id: 2,
        title: "Doberman",
        link: "/breed/Doberman",
        icon: <FaShieldDog />

    },
    {
        id: 3,
        title: "Husky",
        link: "/breed/Husky",
        icon: <GiSniffingDog />
    }
];

export { MenuItemList };
