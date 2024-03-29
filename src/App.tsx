import './App.css';
import MuiAutocomplete from './components/MuiAutocomplete';
import MuiAutocomplete2 from './components/MuiAutocomplete2';
import MuiAutocomplete3 from './components/MuiAutocomplete3';
// import MuiAutocomplete4 from './components/MuiAutocomplete4';
import MuiSelect from './components/MuiSelect';
import MuiPopper from './components/MuiPopper';
import MuiPopover from './components/MuiPopover';
import MuiTooltip from './components/MuiTooltip';

function App() {
  return (
    <div className='App'>
      {/*<MuiAutocomplete />*/}
      {/*<MuiAutocomplete2 />*/}
      {/*<MuiAutocomplete3 />*/}
      {/*<MuiAutocomplete4 />*/}
      <MuiSelect />
      <br />
      <br />
      <br />
      <MuiPopper />
      <br />
      <br />
      <br />
      <MuiPopover />
      <br />
      <br />
      <br />
      <MuiTooltip />
      <br />
      <br />
      <br />
      <MuiSelect />
    </div>
  );
}

export default App;
