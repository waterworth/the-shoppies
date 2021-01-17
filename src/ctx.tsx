import React, { useContext, createContext, useState } from 'react';
import { MovieDetails } from './App';

interface CtxProps {}

const NominationsCtx = createContext([] as any);
export const useNominations = () => useContext(NominationsCtx);

const ContextProvider: React.FC<CtxProps> = ({ children }) => {
  const [nominations, setNominations] = useState([] as any);
  const handleNominate = (movie: MovieDetails) => {
    if (nominations.length < 5) {
      setNominations([...nominations, movie]);
    } else {
      return;
    }
  };

  const handleRemoveNomination = (imdbID: string) => {
    const removeMovie = nominations.filter(
      (movie: any) => movie.imdbID !== imdbID
    );
    setNominations(removeMovie);
  };

  const value = {
    nominations,
    handleNominate,
    handleRemoveNomination,
  };

  return (
    <NominationsCtx.Provider value={value}>{children}</NominationsCtx.Provider>
  );
};

export default ContextProvider;
