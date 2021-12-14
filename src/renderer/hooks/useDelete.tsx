import { useState } from 'react';
import axios from '../common/axios';

const useDelete = () => {
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const doDelete = async (url: string, headers: any) => {
    setLoading(true);
    try {
      const result = await axios.delete(url, { headers });
      setResponse(result.data);
      setLoading(false);
      return result.data;
    } catch (error) {
      setLoading(false);
      setError(error);
      return error;
    }
  };

  return { response, isLoading, error, doDelete };
};

export default useDelete;
