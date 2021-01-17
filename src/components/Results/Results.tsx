import { Box, Heading } from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';
import { MovieDetails } from '../../App';
import { Movie } from '../Movie/Movie';
import { v4 as uuid } from 'uuid';

interface ResultsProps {
  input?: string;
  movieList?: MovieDetails[];
  handleNominate?: MovieDetails;
}

export const Results: React.FC<ResultsProps> = ({
  movieList,
  handleNominate,
}) => {
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
        <Movie
          key={uuid()}
          movie={movie}
          handleNominate={handleNominate}
          variant='result'
        />
      ))}
    </Box>
  );
};
