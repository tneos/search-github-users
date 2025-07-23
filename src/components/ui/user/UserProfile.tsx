import {useQuery} from "@apollo/client";
import {GET_USER} from "@/queries";
import type {UserData} from "@/types";

type UserProfileProps = {
  userName: string;
};
const UserProfile = ({userName}: UserProfileProps) => {
  const {data, loading, error} = useQuery<UserData>(GET_USER, {
    variables: {login: userName},
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <h2 className="text-xl">{error.message}</h2>;
  if (!data) return <h2 className="text-xl">User not found.</h2>;

  // Access data values
  const {avatarUrl, name, bio, url, repositories, followers, following, gists} = data.user;

  return (
    <div>
      <h2 className="text-2xl text-bold">{bio}</h2>;
    </div>
  );
};
export default UserProfile;
