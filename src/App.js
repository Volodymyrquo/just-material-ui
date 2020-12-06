import React, { useState } from 'react';
import { AppButtons, AppHeader, AppList, CheckList } from './components';

const App = (props) => {
  const [state, setState] = useState([
    {
      name: 'Element 1',
      description: 'Complicated description 1',
      checked: false,
    },
    {
      name: 'Element 2',
      description: 'Complicated description 2',
      checked: false,
    },
    {
      name: 'Element 3',
      description: 'Complicated description 3',
      checked: false,
    },
    {
      name: 'Element 4',
      description: 'Complicated description 4',
      checked: false,
    },
  ]);

  return (
    <>
      <AppHeader />
      <AppButtons
        state={state}
        deleteElement={() => {
          const newState = state.filter((item) => !item.checked);
          setState(newState);
          console.log(newState);
        }}
      />
      <AppList state={state} setState={setState} />
      {/* <CheckList /> */}
    </>
  );
};

export default App;
