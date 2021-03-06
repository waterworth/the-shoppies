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
import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';
import logo from './assets/shopify-logo.png';
import ColorModeSwitcher from './components/ColorModeSwitcher/';
import Nominations from './components/Nominations/';
import Results from './components/Results/';
import Search from './components/Search/';
import ContextProvider from './ctx';
import { theme } from './theme/theme';

interface AppProps {}

export interface MovieDetails {
  Title: string;
  Year: string;
  imdbID: string;
}

export const App: React.FC<AppProps> = () => {
  const [input, setInput] = useState('');
  const [movieList, setMovieList] = useState([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e?.target.value);

    const fetchMovies = async () => {
      await axios
        .get(`https://www.omdbapi.com/?apikey=509bc2e&s=${input}`)
        .then((res) => setMovieList(res.data.Search));
    };
    fetchMovies();
  };

  return (
    <>
      <Helmet>
        <link rel='icon' type='image/png' href={logo} />
        <title>The Shoppies</title>
      </Helmet>
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
        <Toaster
          position='top-right'
          toastOptions={{
            duration: 5000,
            success: {
              duration: 3000,
              style: {
                background: '#e3f1df',
                color: '#414f3e',
              },
            },
            error: {
              style: {
                background: '#bf0711',
                color: 'white',
              },
            },
          }}
        />
      </ChakraProvider>
    </>
  );
};
