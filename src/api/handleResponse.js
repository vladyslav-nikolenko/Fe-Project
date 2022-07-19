const token = localStorage.getItem('token');
const initialHeaders = {
    'Content-Type': 'application/json',
    'token': token
};

async function handleResponse(url, method = 'GET', headers = {}) {
    const requestOptions = {
        method,
        headers: initialHeaders,
        ...headers
  };

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);

    return error;
  };
};

export default handleResponse;

