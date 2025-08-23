import { FaHome, FaGamepad } from "react-icons/fa";
import { GiPokecog, GiNewspaper, GiNotebook } from "react-icons/gi";
import { MdOutlinePeople } from "react-icons/md";

export const navLinks = [
  { label: "Home", path: "/", icon: FaHome },
  { label: "Pokédex", path: "/pokedex", icon: GiNotebook },
  { label: "PokéBuilder", path: "/poke-builder", icon: GiPokecog },
  { label: "Games", path: "/games", icon: FaGamepad },
  { label: "News", path: "/news", icon: GiNewspaper },
  { label: "About", path: "/about", icon: MdOutlinePeople },
];
