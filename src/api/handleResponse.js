const token = localStorage.getItem('token');
const initialHeaders = {
  'Content-Type': 'application/json',
  token
};
const { REACT_APP_BASE_SERVER_URL } = process.env;

async function handleResponse(url, method = 'GET', headers = {}) {
  const baseUrl = REACT_APP_BASE_SERVER_URL;
  const requestOptions = {
    method,
    headers: initialHeaders,
    ...headers
  };

  try {
    const fullUrl = baseUrl + url;
    const response = await fetch(fullUrl, requestOptions);
    const result = await response.json();

    // console.log(result);

    return result;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export default handleResponse;
