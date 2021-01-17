import { Box, ChakraProvider, Flex, Heading, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MovieQueryFn } from './api/fetchMovie.js';
import { ColorModeSwitcher } from './components/ColorModeSwitcher/ColorModeSwitcher';
import { Nominations } from './components/Nominations/Nominations';
import { Results } from './components/Results/Results';
import { Search } from './components/Search/Search';
import { theme } from './theme/theme';
import ContextProvider from './ctx';

interface AppProps {}

export interface MovieDetails {
  Title: string;
  Year: string;
  imdbID: string;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: MovieQueryFn,
    },
  },
});

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

  // const handleNominate = (movie: MovieDetails) => {
  //   if (nominations.length < 5) {
  //     console.log('Movie can be added to nominations');
  //     setNominations([...nominations, movie]);
  //     console.log(nominations);
  //   } else {
  //     return;
  //   }
  // };

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Box>
          <Flex direction='column' minH='100vh' p={3}>
            <ColorModeSwitcher w='2rem' justifySelf='flex-end' />
            <VStack spacing={8} w='75%' mx='auto'>
              <Heading as='h1' size='2xl'>
                The Shoppies
              </Heading>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
