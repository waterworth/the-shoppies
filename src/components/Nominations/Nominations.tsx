import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';
import { useNominations } from '../../ctx';
import { MovieDetails } from '../../App';
import { Movie } from '../Movie/Movie';

interface NominationsProps {}

export const Nominations: React.FC<NominationsProps> = () => {
  const { nominations, handleDeleteNomination } = useNominations();
  return (
    <Box
      p='8'
      w='30rem'
      border='1px'
      borderRadius='xl'
      borderColor='ink.lightest'>
      <Heading size='s'>Nominations</Heading>

      {nominations?.map((movie: any) => (
        <Movie key={uuid()} movie={movie} variant='nomination' />
      ))}
    </Box>
  );
};
