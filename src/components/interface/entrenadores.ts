export interface TrainerBasicInfo {
    name: string;
    surname: string;
    dni: string;
}

export interface TrainerPokemon {
    assignedPokemon: number[];  // Array of Pokemon IDs
}

export interface TrainerContact {
    email: string;
}

export interface Trainer {
    id: number;
    basicInfo: TrainerBasicInfo;
    contact: TrainerContact;
    pokemon: TrainerPokemon;
    createdAt: Date;
    updatedAt: Date;
}