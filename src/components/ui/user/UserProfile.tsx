type UserProfileProps = {
  userName: string;
};
const UserProfile = ({userName}: UserProfileProps) => {
  return <h2 className="text-2xl text-bold">{userName}</h2>;
};
export default UserProfile;
