import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import postService, { Post } from "../services/postService";
import { CACHE_KEY_POSTS } from "../constants";

export interface PostQuery {
    pageSize: number
}

const usePosts = (userId: number | undefined, query: PostQuery) => {
    return useInfiniteQuery<Post[], Error>({
        queryKey: (userId && query) ? ['users', userId, 'posts', query] : userId ? ['users', userId, 'posts'] : query ? ['posts', query] : ['posts'],
        queryFn: ({pageParam}) => postService.getById(userId, pageParam, query),
        staleTime: 1 * 60 * 1000,
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        }
    })
}

export default usePosts;