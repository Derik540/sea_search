
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Box, Select, Text, Stack, SimpleGrid,Input, Button,} from '@chakra-ui/react';
import axios from 'axios';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [country, setCountry] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!country) {
      alert('Por favor, selecione um país.');
      return;
    }

    setIsLoading(true);

    const options = {
      method: 'GET',
      url: 'https://seo-keyword-research.p.rapidapi.com/keynew.php',
      params: {
        keyword: keyword,
        country: country
      },
      headers: {
        'X-RapidAPI-Key': '8756f296f6msh0d3d137947b7db4p15f085jsn3b53d969cd87',
        'X-RapidAPI-Host': 'seo-keyword-research.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setResults(response.data); // Armazene os resultados no estado
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={6}>
        <Input
          required
          type="text"
          placeholder="Digite a palavra-chave"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Select placeholder='Selecione um país' value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value='br'>Brasil</option>
        </Select>
        <Button type="submit" isLoading={isLoading} variant='outline' colorScheme='teal'>Buscar</Button>
      </Stack>
      
      <Box mt={10}>
        <SimpleGrid columns={2} spacing={9}>
          {results.map((result, index) => (
            <Box key={index} borderWidth="2px" borderRadius="lg" overflow="hidden">
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {result.text}
                  </Text>
                </Box>
                <br/>
                
                <Box>
                  CPC: {result.cpc}
                  <br />
                  Volume: {result.vol}
                  <br />
                  Competitividade: {result.competition}
                  <br />
                  Score: {result.score}
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </form>
  );
};

export default Search;







