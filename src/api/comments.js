import handleResponse from './handleResponse';

export async function addComment(data) {
  const headers = {
    body: JSON.stringify(data)
  };
  const url = '/comments';
  const result = await handleResponse(url, 'POST', headers);

  return result;
}

export async function getComments() {
  const url = '/comments';
  const result = await handleResponse(url);

  return result;
}

export async function getCommentsByArticleId(articleId) {
  const url = `/comments/${articleId}`;
  const result = await handleResponse(url);

  return result;
}

export async function patchCommentById(id, data) {
  const headers = {
    body: JSON.stringify(data)
  };
  const url = `/comments/${id}`;
  const result = await handleResponse(url, 'PATCH', headers);

  return result;
}

export async function deleteCommentById(id) {
  const url = `/comments/${id}`;
  const result = await handleResponse(url, 'DELETE');

  return result;
}
