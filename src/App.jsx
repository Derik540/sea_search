
import './App.css';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';

import Search from './components/search';

function App() {
  return (
    <Box className="app" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
  <Stack spacing={8}>
    <Heading as="h1" size="xl" color="teal.500">SeaSeo</Heading>
    <Text fontSize="md" color="gray.600">Com o SeaSeo você pode descobrir quais são as palavras mais buscadas na internet</Text>
    <Search />
  </Stack>
</Box>
  );
}

export default App;


