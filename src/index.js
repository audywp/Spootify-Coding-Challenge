import React from 'react';
import ReactDOM from 'react-dom';

import './styles/_main.scss';
import Root from './root';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Persistor, Store } from './store/store';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import Audio from './audio';

const newVariable = 'newVariable';
const newVariable1 = 'newVariable1';
const newVariable12 = 'newVariable12';

let theme = createTheme({
  palette: {
    primary: {
      main: '#564FD8',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <ThemeProvider theme={theme}>
          <Audio />
          <Root />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
