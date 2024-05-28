import { useParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams()
  return <p>User {params.id}</p>;
};

export default UserDetailPage;
