import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
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

      {nominations.length === 5 ? (
        <Text
          fontWeight='600'
          my='4'
          p='4'
          textAlign='center'
          bg='green.lighter'
          color='green.text'
          borderTop='4px'
          borderColor='green.light'>
          🎉 Your nomination list is full! 🏆
        </Text>
      ) : null}

      {nominations?.map((movie: any) => (
        <Movie key={uuid()} movie={movie} variant='nomination' />
      ))}
    </Box>
  );
};
