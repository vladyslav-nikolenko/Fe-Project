import React from 'react';
import { Button, FilePicker, Pane, Textarea, TextInput } from 'evergreen-ui';

function Edit() {
  return (
    <Pane>
      <TextInput />
      <Textarea />
      <FilePicker />
      <Button>Edit</Button>
    </Pane>
  );
}

export default Edit;
