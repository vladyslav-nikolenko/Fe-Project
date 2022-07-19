import  handleResponse  from './handleResponse';

const { REACT_APP_BASE_SERVER_URL } = process.env;

export async function addComment(data) {
  const headers = {
        body: JSON.stringify(data)
  };
  const url = `${REACT_APP_BASE_SERVER_URL}/comments`;
  const result = await handleResponse( url, 'POST', headers);

  return result;
};

export async function getComments() {

  const url = `${REACT_APP_BASE_SERVER_URL}/comments`;
  const result = await handleResponse(url);

  return result;
};

export async function getCommentsByArticleId(articleId) {

  const url = `${REACT_APP_BASE_SERVER_URL}/comments/${articleId}`;
  const result = await handleResponse(url);

  return result;
};

export async function patchCommentById(id, data) {
    const headers = {
        body: JSON.stringify(data)
  };
  const url = `${REACT_APP_BASE_SERVER_URL}/comments/${id}`;
  const result = await handleResponse( url, 'PATCH', headers);

  return result;
};

export async function deleteCommentById(id) {
  const url = `${REACT_APP_BASE_SERVER_URL}/comments/${id}`;
  const result = await handleResponse(url, 'DELETE');

  return result;
};
