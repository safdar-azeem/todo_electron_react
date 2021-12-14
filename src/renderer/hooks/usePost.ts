import { useState } from 'react';
import axios from '../common/axios';

const usePost = () => {
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const doPost = async (url: string, data: any, headers: any) => {
    setLoading(true);
    try {
      const result = await axios.post(url, data, { headers });
      setResponse(result.data);
      setLoading(false);
      return result.data;
    } catch (error) {
      setError(error);
      setLoading(false);
      return error;
    }
  };

  return { response, isLoading, error, doPost };
};

export default usePost;
