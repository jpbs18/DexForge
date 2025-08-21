import { FaHome, FaGamepad, FaTrophy } from "react-icons/fa";
import { SiPokemon } from "react-icons/si";
import { GiPokecog, GiNewspaper } from "react-icons/gi";
import { MdOutlinePeople } from "react-icons/md";

export const navLinks = [
  { label: "Home", path: "/", icon: FaHome },
  { label: "Pokédex", path: "/pokedex", icon: SiPokemon },
  { label: "PokéBuilder", path: "/poke-builder", icon: GiPokecog },
  { label: "Games", path: "/games", icon: FaGamepad },
  { label: "News", path: "/news", icon: GiNewspaper },
  { label: "Board", path: "/board", icon: FaTrophy },
  { label: "About", path: "/about", icon: MdOutlinePeople },
];
