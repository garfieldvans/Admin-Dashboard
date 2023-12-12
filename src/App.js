import '@fontsource/montserrat/400.css';
import '@fontsource/plus-jakarta-sans/700.css';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from './routes/AppRoutes';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
