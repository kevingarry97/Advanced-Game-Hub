import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: ({pageParam = 1}) => apiClient.getAll({params: {
        page: pageParam
    }})
})

export default usePlatforms;