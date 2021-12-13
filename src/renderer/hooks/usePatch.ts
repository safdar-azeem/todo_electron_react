import React, { useState } from 'react';
import axios from '../common/axios';

const usePatch = () => {
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const doPatch = async (url, data) => {
    setLoading(true);
    try {
      const result = await axios.patch(url, data);
      setResponse(result.data);
      setLoading(false);
      return result.data;
    } catch (error) {
      setError(error);
      setLoading(false);
      return error;
    }
  };


  return { response, isLoading, error, doPatch };
};

export default usePatch;
