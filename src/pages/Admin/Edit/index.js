import React from 'react';
import { Button, FilePicker, Pane, Textarea, TextInput } from 'evergreen-ui';

function Edit() {
  return (
    <Pane
      width='800px'
    >
      <TextInput
        placeholder='Category'
      />
      <TextInput
        width='800px'
        marginY='10px'
        placeholder='Title'
      />
      <Textarea />
      <FilePicker
        placeholder='Main picture'
      />
      <FilePicker
        marginY='10px'
        placeholder='Additional picture'
      />
      <Button
        type='button'
      >Edit</Button>
    </Pane>
  );
}

export default Edit;
