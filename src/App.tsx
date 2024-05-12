import React from 'react';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Games from 'src/components/Games';

function App() {
  return (
    <ChakraProvider>
      <Games />
    </ChakraProvider>
  );
}

export default App;
