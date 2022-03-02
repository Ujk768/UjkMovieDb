const useGenres = (selectedgenres) => {
  if (selectedgenres.length < 1) return '';

  const GenresIds = selectedgenres.map((g) => g.id);
  return GenresIds.reduce((acc, curr) => acc + ',' + curr);
};
export default useGenres;
