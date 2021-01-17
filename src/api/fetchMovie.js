export const MovieQueryFn = async ({ queryKey }) => {
  const { data } = await fetch(
    `http://www.omdbapi.com/?apikey=509bc2e&s=${queryKey[0]}`
  );
  return data;
};
