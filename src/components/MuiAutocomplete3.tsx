import { Autocomplete, Box, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';

type Player = {
  id: number;
  first_name: string;
  last_name: string;
};

const MuiAutocomplete3 = () => {
  const [jsonResults, setJsonResults] = useState<Player[]>([]);

  useEffect(() => {
    fetch('https://www.balldontlie.io/api/v1/players')
      .then((response) => response.json())
      .then((json) => setJsonResults(json.data));
  }, []);

  console.log('jsonResults=', jsonResults);

  return (
    <Stack sx={{ width: 300, margin: 'auto' }}>
      <Autocomplete
        // compulsory fields are options | renderInput
        id='nba_player_demo'
        getOptionLabel={(jsonResult: Player) =>
          `${jsonResult.first_name} ${jsonResult.last_name}`
        }
        options={jsonResults}
        sx={{ width: 300 }}
        isOptionEqualToValue={(option, value) =>
          option.first_name === value.first_name
        }
        noOptionsText={'NO AVAILABLE PLAYERS DAYUM'}
        renderOption={(props, jsonResult) => (
          <Box component='li' {...props} key={jsonResult.id}>
            {jsonResult.first_name} {jsonResult.last_name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField {...params} label='Search for a Player' />
        )}
      />
    </Stack>
  );
};

export default MuiAutocomplete3;
