import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform}[];
    metacritic: number;
}

const useGames = (selectedGenres: Genre | null,selectedPlaform: Platform | null ) => 
    useData<Game>('/games', {
        params: {
            genres: selectedGenres?.id, platforms: selectedPlaform?.id
        }
    }, [selectedGenres?.id, selectedPlaform?.id])

export default useGames;