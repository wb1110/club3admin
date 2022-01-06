import * as React from "react";
//import { Admin, Resource, ListGuesser  } from 'react-admin';
// import { Admin, Resource, EditGuesser } from 'react-admin';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from "./posts";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from "./Dashboard";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    {/*Replace ListGuesser when in production, https://marmelab.com/react-admin/Tutorial.html */}
     {/* <Resource name="users" list={ListGuesser} />  */}
     {/* <Resource name="posts" list={ListGuesser} /> */}
     {/* <Resource name="posts" list={PostList} /> */}
     {/* <Resource name="posts" list={PostList} edit={EditGuesser}/> */}
     <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
     <Resource name="users" list={UserList} icon={UserIcon}/>
  </Admin>
);

export default App;