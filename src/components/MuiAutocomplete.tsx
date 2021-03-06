import { Stack, Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';

type Skill = {
  id: number;
  label: string;
};

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  // console.log({ value });
  console.log(skill);

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
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label='Skills' />}
        value={skill}
        onChange={(_event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
