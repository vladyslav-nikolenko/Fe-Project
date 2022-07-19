import  handleResponse  from './handleResponse';

const { REACT_APP_BASE_SERVER_URL } = process.env;

export async function addArticle(data) {
  const headers = {
        body: JSON.stringify(data)
  };
  const url = `${REACT_APP_BASE_SERVER_URL}/articles`;
  const result = await handleResponse( url, 'POST', headers);

  return result;
};

export async function getArticles() {
  const url = `${REACT_APP_BASE_SERVER_URL}/articles`;
  const result = await handleResponse(url);

  return result;
};

export async function getArticleById(id) {
  const url = `${REACT_APP_BASE_SERVER_URL}/articles/${id}`;
  const result = await handleResponse(url);

  return result;
};

export async function getArticlesByCategory(category) {
  const url = `${REACT_APP_BASE_SERVER_URL}/articles/categories/${category}`;
  const result = await handleResponse(url);

  return result;
};

export async function patchArticleById(id, data) {
    const headers = {
        body: JSON.stringify(data)
  };
  const url = `${REACT_APP_BASE_SERVER_URL}/articles/${id}`;
  const result = await handleResponse( url, 'PATCH', headers);

  return result;
};

export async function deleteArticleById(id) {
  const url = `${REACT_APP_BASE_SERVER_URL}/articles/${id}`;
  const result = await handleResponse(url, 'DELETE');

  return result;
};

