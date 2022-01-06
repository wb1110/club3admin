import * as React from "react";
// import { Admin, Resource, ListGuesser  } from 'react-admin';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    {/*Replace ListGuesser when in production, https://marmelab.com/react-admin/Tutorial.html */}
     {/* <Resource name="users" list={ListGuesser} />  */}
     <Resource name="users" list={UserList} />
  </Admin>
);

export default App;