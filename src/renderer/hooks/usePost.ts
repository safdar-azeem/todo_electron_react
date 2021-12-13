import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { END_POINT } from '../routes/paths';
import { notification } from '../utils/notification';

const usePost = (url, data, headers) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const doPost = async (url, data, headers) => {
    setIsLoading(true);
    try {
      let response = await axios.post(`${END_POINT}${url}`, data, headers);
      if (response.data.status === 'error') {
        setError(response.data.message);
      }
      setResponse(response.data);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      let notify = notification({
        type: 'error',
        message: 'Something went wrong',
      });
      notify();
    }
  };

  useEffect(() => {
    if (url && data) {
      setIsLoading(true);
      const sendPost = async () => {
        try {
          let response;
          if (headers) {
            response = await axios.post(`${END_POINT}${url}`, headers, data);
          } else {
            response = await axios.post(`${END_POINT}${url}`, data);
          }
          setResponse(response.data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };
      sendPost();
    }
  }, [url, data, headers]);

  return { response, isLoading, error, doPost };
};

export default usePost;
