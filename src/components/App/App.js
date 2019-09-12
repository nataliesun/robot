import React from 'react';
import './App.scss';

import Grid from '../Grid/Grid';
import Controls from '../Controls/Controls';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Grid />
        <Controls />
      </div>
    );
  }
}

export default App;