interface Character{
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    episode: string[];
    origin: {
        name: string;
      };
};

export default Character;