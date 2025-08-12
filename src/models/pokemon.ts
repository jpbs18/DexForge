export interface Pokemon {
  id: number
  name: string;
  types: string[]
  front_default: string
}

export interface PokeData {
  page: number
  limit: number
  total: number
  totalPages: number
  data: Pokemon[]
}