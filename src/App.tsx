import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  VStack,
  Grid,
  Heading,
} from '@chakra-ui/react';
import { theme } from './theme/theme';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ColorModeSwitcher } from './components/ColorModeSwitcher/ColorModeSwitcher';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Search } from './components/Search/Search';
import { Results } from './components/Results/Results';
import { Nominations } from './components/Nominations/Nominations';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Box>
        <Flex direction='column' minH='100vh' p={3}>
          <ColorModeSwitcher w='2rem' justifySelf='flex-end' />
          <VStack spacing={8} w='75%' mx='auto'>
            <Heading as='h1' size='2xl'>
              The Shoppies
            </Heading>
            <Search />
            <Flex w='100%' justify='space-between'>
              <Results />
              <Nominations />
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </ChakraProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
