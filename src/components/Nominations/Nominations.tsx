import React from 'react';
import { Box } from '@chakra-ui/react';

interface NominationsProps {}

export const Nominations: React.FC<NominationsProps> = () => {
  return (
    <Box
      p='8'
      w='30rem'
      border='1px'
      borderRadius='xl'
      borderColor='ink.lightest'>
      <h2>Nominations</h2>
    </Box>
  );
};
