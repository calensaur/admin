import React from "react";
import {
  Datagrid,
  List,
  Edit,
  SimpleForm,
  TextField,
  TextInput,
  EditButton,
  SelectInput,
  SelectArrayInput,
  DateInput,
  DateField,
  NumberInput,
  FunctionField,
  Filter,
  Create,
  DeleteButton,
  ImageField,
  BooleanInput,
  BooleanField,
} from "react-admin";

import CustomImageField from './components/ImageField'

const ReleaseFilter = props => (
  <Filter {...props}>
    <SelectInput
      source="type"
      choices={[
        { id: "film", name: "Film" },
        { id: "game", name: "Game" },
        { id: "series", name: "Series" },
      ]}
      alwaysOn
    />
  </Filter>
);

export const ReleaseList = props => (
  <List {...props} filters={<ReleaseFilter />}>
    <Datagrid>
      <ImageField source="cover" />
      <TextField source="name" />
      <TextField source="type" />
      <DateField source="date" />
      <TextField source="width" />
      <TextField source="percentageWidth" />
      <TextField source="director" />
      <TextField source="description" />
      <FunctionField
        label="Platforms"
        render={record =>
          Array.isArray(record.platforms) ? record.platforms.join(", ") : ""
        }
      />
      <TextField source="season" />
      <BooleanField source="isModerated" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const ReleaseEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <CustomImageField name="cover" label="Cover" />
      <TextInput source="name" />
      <SelectInput
        source="type"
        choices={[
          { id: "film", name: "Film" },
          { id: "game", name: "Game" },
          { id: "series", name: "Series" },
        ]}
      />
      <DateInput source="date" />
      <NumberInput source="width" step={10} />
      <NumberInput source="percentageWidth" step={1} />
      <TextInput source="director" />
      <SelectArrayInput
        label="Platfoms"
        source="platforms"
        choices={[
          { id: "pc", name: "PC" },
          { id: "xbox_one", name: "X-One" },
          { id: "ps_4", name: "PS 4" },
          { id: "nintendo_switch", name: "Nintendo Switch" }
        ]}
      />
      <SelectArrayInput
        label="Platfoms"
        source="platforms"
        choices={[
          { id: "pc", name: "PC" },
          { id: "xbox_one", name: "X-One" },
          { id: "ps_4", name: "PS 4" },
          { id: "nintendo_switch", name: "Nintendo Switch" }
        ]}
      />
      <NumberInput source="season" step={1} />
      <TextInput source="description" />
      <BooleanInput label="Moderated" source="isModerated" />
    </SimpleForm>
  </Edit>
);

export const ReleaseCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <CustomImageField name="cover" label="Cover" />
      <TextInput source="name" />
      <SelectInput
        source="type"
        choices={[
          { id: "film", name: "Film" },
          { id: "game", name: "Game" },
          { id: "series", name: "Series" },
        ]}
      />
      <DateInput source="date" />
      <NumberInput source="width" step={10} />
      <NumberInput source="percentageWidth" step={1} />
      <TextInput source="director" />
      <SelectArrayInput
        label="Platfoms"
        source="platforms"
        choices={[
          { id: "pc", name: "PC" },
          { id: "xbox_one", name: "X-One" },
          { id: "ps_4", name: "PS 4" },
          { id: "nintendo_switch", name: "Nintendo Switch" }
        ]}
      />
      <NumberInput source="season" step={1} />
      <TextInput source="description" />
      <BooleanInput label="Moderated" source="isModerated" />
    </SimpleForm>
  </Create>
);
