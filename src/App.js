import * as React from "react";
//import { Admin, Resource, ListGuesser  } from 'react-admin';
// import { Admin, Resource, EditGuesser } from 'react-admin';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from "./posts";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    {/*Replace ListGuesser when in production, https://marmelab.com/react-admin/Tutorial.html */}
     {/* <Resource name="users" list={ListGuesser} />  */}
     {/* <Resource name="posts" list={ListGuesser} /> */}
     {/* <Resource name="posts" list={PostList} /> */}
     {/* <Resource name="posts" list={PostList} edit={EditGuesser}/> */}
     <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
     <Resource name="users" list={UserList} />
  </Admin>
);

export default App;