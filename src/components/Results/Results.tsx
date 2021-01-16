import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface ResultsProps {}

export const Results: React.FC<ResultsProps> = () => {
  return (
    <Box
      p='8'
      w='30rem'
      border='1px'
      borderRadius='xl'
      borderColor='ink.lightest'>
      <Text>Results for ''</Text>
    </Box>
  );
};
