import { useState, useEffect } from 'react';
import axios from '../common/axios/';


function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] =useState<any>(null);

  const doFetch = async (url: string) => {
    setLoading(true);
    try {
      const result = await axios.get(url);
      setData(result.data);
      setError(null);
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(()=>{
    doFetch(url);
  },[])

  return { data, isLoading, error, doFetch };

}

export default useFetch;
