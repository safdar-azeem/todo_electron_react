import React, { useState } from 'react';
import axios from '../common/axios';

const useDelete = (url, headers) => {
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const doDelete = async (url) => {
    setLoading(true);
    try {
      const result = await axios.delete(url, { headers });
      setResponse(result.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return { response, isLoading, error, doDelete };
};

export default useDelete;
