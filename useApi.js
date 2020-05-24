import { useState, useEffect } from 'react';

const useApi = api => (initialQuery, initialParams) => {
  const [query, setQuery] = useState(initialQuery);
  const [params, setParams] = useState(initialParams);
  const [body, setBody] = useState(null);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
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
    if(query && isMounted) {
      request();
      setQuery(null);
      setParams(null);
      setBody(null);
    }
    () => {
      isMounted = false;
    }
  }, [query, params, body]);

  const request = (query, params, body) => {
    setData(null);
    setError(null);
    setQuery(query);
    setParams(params);
    setBody(body);
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