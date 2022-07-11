import React, { Fragment } from 'react';
import { Button, FilePicker, Pane, Textarea, TextInput } from 'evergreen-ui';

function Create() {
  return (
    <Pane>
      <TextInput />
      <Textarea />
      <FilePicker />
      <Button>Create</Button>
    </Pane>
  );
}

export default Create;
