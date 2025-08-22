export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  image: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  types: string[];
  abilities: string[];
  image: string;
  weight: number;
  height: number;
  stats: Stats[];
  genders: string[];
  weaknesses: string[];
  evolutions: string[];
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
  name: string;
}
