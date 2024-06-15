import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_PROFILE = gql`
  query GetProfile {
    profile {
      login
      avatar_url
      bio
      followers
      following
    }
  }
`;

const Profile = () => {
  const { loading, error, data } = useQuery(GET_PROFILE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { login, avatar_url, bio, followers, following } = data.profile;

  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h1>{login}</h1>
      <p>{bio}</p>
      <p>
        Followers: {followers} | Following: {following}
      </p>
    </div>
  );
};

export default Profile;
