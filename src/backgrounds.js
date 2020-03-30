import React from "react";
import {
  Datagrid,
  List,
  Edit,
  SimpleForm,
  TextInput,
  EditButton,
  SelectInput,
  DateInput,
  DateField,
  Filter,
  Create,
  DeleteButton,
  TextField,
  ImageField
} from "react-admin";

import CustomImageField from "./components/ImageField";

const BackgroundsFilter = props => (
  <Filter {...props}>
    <SelectInput
      source="type"
      choices={[
        { id: "film", name: "Film" },
        { id: "game", name: "Game" },
        { id: "series", name: "Series" }
      ]}
      alwaysOn
    />
  </Filter>
);

export const BackgroundsList = props => (
  <List {...props} filters={<BackgroundsFilter />}>
    <Datagrid>
      <TextField source="type" />
      <ImageField source="cover" />
      <DateField source="date" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const BackgroundsEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <SelectInput
        source="type"
        choices={[
          { id: "film", name: "Film" },
          { id: "game", name: "Game" },
          { id: "series", name: "Series" }
        ]}
      />
      <CustomImageField name="cover" label="Cover" />
      <DateInput source="date" />
    </SimpleForm>
  </Edit>
);

export const BackgroundsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <SelectInput
        source="type"
        choices={[
          { id: "film", name: "Film" },
          { id: "game", name: "Game" },
          { id: "series", name: "Series" }
        ]}
      />
      <DateInput source="date" />
      <CustomImageField name="cover" label="Cover" />
    </SimpleForm>
  </Create>
);
