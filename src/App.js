import React from "react";
import { Admin, Resource } from "react-admin";

import AuthProvider from "./AuthProvider";
import RestProvider from "./RestProvider";

import { ReleaseList, ReleaseEdit, ReleaseCreate } from "./releases";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

const trackedResources = [{ name: "releases", isPublic: true }];

const dataProvider = RestProvider(config, { trackedResources });
const authProvider = AuthProvider();

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="releases"
        list={ReleaseList}
        create={ReleaseCreate}
        edit={ReleaseEdit}
      />
    </Admin>
  );
}

export default App;
