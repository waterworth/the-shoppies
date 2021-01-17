import {
  Box,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import logo from './assets/shopify-logo.png';
import { ColorModeSwitcher } from './components/ColorModeSwitcher/ColorModeSwitcher';
import { Nominations } from './components/Nominations/Nominations';
import { Results } from './components/Results/Results';
import { Search } from './components/Search/Search';
import ContextProvider from './ctx';
import { theme } from './theme/theme';

interface AppProps {}

export interface MovieDetails {
  Title: string;
  Year: string;
  imdbID: string;
}

const queryClient = new QueryClient();

export const App: React.FC<AppProps> = () => {
  const [input, setInput] = useState('');
  const [movieList, setMovieList] = useState([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e?.target.value);

    const fetchMovies = async () => {
      const movies = await axios
        .get(`http://www.omdbapi.com/?apikey=509bc2e&s=${input}`)
        .then((res) => setMovieList(res.data.Search));
    };
    fetchMovies();
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Box>
          <Flex direction='column' minH='100vh' p={3}>
            <ColorModeSwitcher w='2rem' justifySelf='flex-end' />
            <VStack spacing={8} w='75%' mx='auto'>
              <Flex alignItems='center'>
                <Image boxSize='75px' src={logo} mr='4' />
                <Heading as='h1' size='2xl'>
                  The Shoppies
                </Heading>
              </Flex>
              <ContextProvider>
                <Search onChange={handleChange} />
                <Flex w='100%' justify='space-between'>
                  <Results movieList={movieList} />
                  <Nominations />
                </Flex>
              </ContextProvider>
            </VStack>
          </Flex>
        </Box>
      </ChakraProvider>
    </QueryClientProvider>
  );
};
