import React, { useContext, createContext, useState } from 'react';
import { MovieDetails } from './App';
import toast from 'react-hot-toast';

interface CtxProps {}

const NominationsCtx = createContext([] as any);
export const useNominations = () => useContext(NominationsCtx);

const ContextProvider: React.FC<CtxProps> = ({ children }) => {
  const [nominations, setNominations] = useState([] as any);
  const handleNominate = (movie: MovieDetails) => {
    if (nominations.length < 5) {
      setNominations([...nominations, movie]);
      toast.success(`${movie.Title} added to nominations`);
    } else {
      toast.error('Nominations are full!');
    }
  };

  const handleRemoveNomination = (imdbID: string) => {
    const removeMovie = nominations.filter(
      (movie: any) => movie.imdbID !== imdbID
    );
    setNominations(removeMovie);
    toast.error(`Movie removed from nominations`);
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
