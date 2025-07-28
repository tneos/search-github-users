import {useQuery} from "@apollo/client";
import {GET_USER} from "@/queries";
import type {UserData} from "@/types";
import UserCard from "./UserCard";
import StatsContainer from "./StatsContainer";
import ForkedRepos from "../charts/ForkedRepos";
import PopularRepos from "../charts/PopularRepos";
import UsedLanguages from "../charts/UsedLanguages";

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
      <UserCard avatarUrl={avatarUrl} name={name} bio={bio} url={url} />
      <StatsContainer
        totalRepos={repositories.totalCount}
        followers={followers.totalCount}
        following={following.totalCount}
        gists={gists.totalCount}
      />
      {/* Setup charts if repositories found */}
      {repositories.totalCount > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          <UsedLanguages repositories={repositories.nodes} />
          <PopularRepos repositories={repositories.nodes} />
          <ForkedRepos repositories={repositories.nodes} />
        </div>
      )}
    </div>
  );
};
export default UserProfile;
