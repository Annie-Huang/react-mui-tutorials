import { Stack, Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];

const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);

  console.log({ value });

  /*
  Without freeSolo:
  - chevron down | chevron up icon will appear. No clear icon (cross).
  - when you type script, 'Javascript' and 'TypeScript' will be in the list.
      - press enter does nothing
      - press down will go through the list in menu
      - when you pick something in the dropdown through enter key or mouse, the chevron icon and clear icon will both appear

  With freeSolo:
  - no chevron down | chevron up icon. No cross icon.
  - when you type script, 'Javascript' and 'TypeScript' will be in the list.
      - press enter and you can see value attached into 'value' field
      - press down will go through the list in menu
      - when you pick something in the dropdown through enter key or mouse, the clear icon will both appear
  - when you type 'abc', dropdown menu is empty but you can press enter to see value attached into 'value' field
  */

  return (
    <Stack spacing={2} width='250px'>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label='Skills' />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
    </Stack>
  );
};

export default MuiAutocomplete;
