import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './Routes';

const App = () => (
  <>
    <StatusBar
      barStyle='light-content'
      backgroundColor='#82259e'
      animated
      hidden
    />
    <Routes />
  </>
);

export default App;
