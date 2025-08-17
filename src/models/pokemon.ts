export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  front_default: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  types: string[];
  abilities: string[];
  front_default: string;
  weight: number;
  height: number;
  stats: Stats[];
  genders: string[];
  weaknesses: string[];
  evolutions: { species: string }[];
  category: string;
}

export interface PokeData {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Pokemon[];
}

export interface Stats {
  base_stat: number;
  effort?: number;
  stat: {
    name: string;
    url?: string;
  };
}
