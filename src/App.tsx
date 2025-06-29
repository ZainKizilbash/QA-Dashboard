import { useEffect, useState } from 'react';
import ImgMediaCard from './assets/BasicCard';
import Xyz from './KY';
import { SearchContext } from './context/context';
import getData from './api/getData';
import type { ApiResponse } from './interface';
import CircularIndeterminate from './loadingPage';
import DescriptionAlerts from './errorScreen';


export default function App() {
  let content;
  const [search, setSearch] = useState('');
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [isPool, setisPooling] = useState<boolean>(false);
  
  useEffect(() => {
    async function fetchData() {
      const res = await getData();
      setResponse(res);
  }
    fetchData();
  }, [isPool]);

  setTimeout(() => {
    setisPooling(!isPool);
  }, (10000));

  if(!response){
    content = <CircularIndeterminate/>;
  } else if(response.status !== 200) {
    content = <DescriptionAlerts status={response.status} message={response.message}/>
  } else {
    content = <>
      <Xyz/> 
      <ImgMediaCard data={response?.data ?? []} /> 
    </>
  }

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <div>
        {content}
      </div>
    </SearchContext.Provider>
  );
}
