import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

export const PostList = props => (
    <List {...props}>
        {/* <Datagrid rowClick="edit"> */}
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            {/* <TextField source="body" /> */}
            <EditButton />
        </Datagrid>
    </List>
);