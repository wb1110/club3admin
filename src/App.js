import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
// import dataProvider when you have an api setup
import { PostList, PostEdit, PostCreate } from "./posts";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import { ServicesList } from "./services";


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
     <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
     <Resource name="users" list={UserList} icon={UserIcon}/>
     <Resource name="services" list={ServicesList} />
  </Admin>
);

export default App;