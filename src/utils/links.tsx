import { FaHome } from "react-icons/fa";
import { SiPokemon } from "react-icons/si";
import { GiPokecog, GiNewspaper } from "react-icons/gi";
import { MdOutlinePeople } from "react-icons/md";

export const navLinks = [
  { label: "Home", path: "/", icon: FaHome },
  { label: "Pokédex", path: "/pokedex", icon: SiPokemon },
  { label: "Team Builder", path: "/team-builder", icon: GiPokecog },
  { label: "News", path: "/news", icon: GiNewspaper },
  { label: "About", path: "/about", icon: MdOutlinePeople },
];
