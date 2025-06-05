export interface PokemonSprites {
    front_default: string;
    front_shiny: string;
}

export interface PokemonForm {
    name: string;
}

export interface PokemonType {
    type: {
        name: string;
    }
}

export interface Pokemon {
    id: number;
    sprites: PokemonSprites;
    forms: PokemonForm[];
    types: PokemonType[];
}