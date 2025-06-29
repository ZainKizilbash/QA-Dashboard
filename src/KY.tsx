import { useContext } from 'react';
import { SearchContext } from './context/context';

export default function Xyz() {
  const context = useContext(SearchContext);
  if (!context) throw new Error('Xyz must be used within SearchContext.Provider');

  const { search, setSearch } = context;

  return (
    <>
      <input value={search} onChange={e => setSearch(e.target.value)} style={{position: 'fixed'}} />
      <p>Current search: {search}</p>
    </>
  );
}
