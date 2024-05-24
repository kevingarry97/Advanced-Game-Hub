import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";


export interface Genre {
    id: number;
    name: string;
    image_background: string
}
const apiCLient = new APIClient<Genre>('/genres')

const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: ({pageParam = 1}) => apiCLient.getAll({params: {
        page: pageParam
    }}),
    // initialData: {count: genres.length, results: genres}
})

export default useGenres;