// src/components/Repositories.js
import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_REPOSITORIES = gql`
  query GetRepositories {
    repositories {
      name
      html_url
      description
      stargazers_count
      forks_count
      language
    }
  }
`;

const Repositories = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Repositories</h2>
      <ul>
        {data.repositories.map((repo) => (
          <li key={repo.name}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
            <p>
              ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count} |{" "}
              {repo.language}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repositories;
