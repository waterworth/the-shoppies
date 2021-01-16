import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { MovieDetails } from '../../App';
import { Movie } from '../Movie/Movie';

interface ResultsProps {
  input?: string;
  movieList?: MovieDetails[];
}

export const Results: React.FC<ResultsProps> = ({ movieList }) => {
  const queryClient = useQueryClient();
  console.log(movieList);
  return (
    <Box
      overflow='scroll'
      p='8'
      w='30rem'
      border='1px'
      borderRadius='xl'
      borderColor='ink.lightest'>
      <Heading size='l'>Movies</Heading>
      {movieList?.map((movie) => (
        <Movie movie={movie} />
      ))}
    </Box>
  );
};
