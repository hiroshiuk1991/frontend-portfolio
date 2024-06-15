import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Profile />
        <Repositories />
      </div>
    </ApolloProvider>
  );
};

export default App;
