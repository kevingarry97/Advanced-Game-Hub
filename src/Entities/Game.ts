import { Platform } from "../hooks/useGames";
import { Genre } from "./Genre";
import { Publisher } from "./Publisher";


export default interface Game {
  id: number;
  name: string;
  background_image: string;
  description_raw: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}
