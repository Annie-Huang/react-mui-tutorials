// I got confused which one is the latest one.
// import Autocomplete from '@material-ui/lab/Autocomplete';
import Autocomplete from '@mui/material/Autocomplete';
import Popper from '@mui/material/Popper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';

interface Option {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiAutocomplete-listbox': {
        border: '4px solid grey',
        fontSize: 18,
        '& li:nth-child(even)': { backgroundColor: '#CCC' },
        '& li:nth-child(odd)': { backgroundColor: '#FFF' },
      },
    },
  })
);

const CustomPopper = (props: any) => {
  const classes = useStyles();
  return (
    <Popper
      {...props}
      className={classes.root}
      placement='bottom'
      open={true}
    />
  );
};

const MuiAutocomplete2 = () => {
  const [data, setData] = useState<Option[]>([]);

  useEffect(() => {
    // fetch('https://swapi-deno.azurewebsites.net/api/starships')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Autocomplete
      // open={true}
      id='custom-autocomplete'
      options={data}
      style={{ width: 350, margin: 20 }}
      getOptionLabel={(option) => `${option.name}: ${option.email}`} //filter value
      // ListboxProps={{ sx: root }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            variant='outlined'
            label='Name: Email'
            // sx={textfield}
          />
        );
      }}
      //MUI v4 only passed (option)
      renderOption={(props, option, state) => {
        return (
          <h4
            key={`${option.name}: ${option.email}`}
          >{`${option.name}: ${option.email}`}</h4>
        ); //display value
      }}
      PopperComponent={CustomPopper}
    />
  );
};

export default MuiAutocomplete2;
