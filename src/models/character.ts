export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    location: {
        name: string;
    };
    origin: {
        name: string;
    }
    image: string;
    url: string;
    created: string;
}