export interface IMovie {
    image: {
    medium: string;
    original: string;
    };
    name: string;
    genres: string[];
    id: number;
    premiered: string;
    language: string;
    summary: string;
    network: {
        country: {
            name: string;
            code: string;
            timezone: string;
        };
    };
    rating: {
        average: number | null;
    };
}

