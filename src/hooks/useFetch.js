import useSWR from 'swr';

function useFetch(endpoint) {
  async function fetcher(endpoint) {    
    const response = await fetch(endpoint);
    const json = await response.json();

    return json;
  }

  if (!endpoint) {
    console.error('Endpoint is not defined');
  }
  const { data, error } = useSWR(endpoint, fetcher);

  return {
    jsonData: data,
    error: error,
    isLoading: !error && !data,
    isError: !!error,
  };
}

export default useFetch;