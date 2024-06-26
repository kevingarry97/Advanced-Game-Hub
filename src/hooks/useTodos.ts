import axios from "axios";
import { useQuery } from "react-query";

const useTodos = () => {
  const fetchTodos = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  return useQuery<any[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};

export default useTodos;
