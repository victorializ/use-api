import { useState, useEffect } from 'react';
import { api } from './api';

const useApi = (initialQuery, initialParams) => {
  const [query, setQuery] = useState(initialQuery);
  const [params, setParams] = useState(initialParams);
  const [body, setBody] = useState(null);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const request = async () => {
      setError(null);
      setLoading(true);
      try {
        const response = await api[query](params, body);
        setData(response);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    if(query) {
      request();
    }
  }, [query, body, params]);

  const cleanUp = () => {
    setQuery(null);
    setParams(null);
    setBody(null);
    setData(null);
    setError(null);
  };

  const request = (url, params, body) => {
    cleanUp();
    url && setQuery(url);
    params && setParams(params);
    body && setBody(body);
  };

  return [{ 
    data, 
    loading, 
    error 
  },
    request 
  ];
};

export default useApi;