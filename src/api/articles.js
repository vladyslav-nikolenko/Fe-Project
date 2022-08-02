import handleResponse from './handleResponse';

export async function addArticle(data) {
  const headers = {
    body: JSON.stringify(data)
  };
  const url = '/articles';
  const result = await handleResponse(url, 'POST', headers);

  return result;
}

export async function getArticles(isApproved) {
  const url = `/articles/${isApproved}`;
  const result = await handleResponse(url);

  return result;
}

export async function getArticleByAuthor(userPath) {
  const url = `/articles/author/${userPath}`;
  const result = await handleResponse(url);

  return result;
}

export async function getArticleById(id) {
  const url = `/articles/${id}`;
  const result = await handleResponse(url);

  return result;
}

export async function getArticlesByCategory(category) {
  const url = `/articles/categories/${category}`;
  const result = await handleResponse(url);

  return result;
}

export async function patchArticleById(id, data) {
  const headers = {
    body: JSON.stringify(data)
  };
  const url = `/articles/${id}`;
  const result = await handleResponse(url, 'PATCH', headers);

  return result;
}

export async function deleteArticleById(id) {
  const url = `/articles/${id}`;
  const result = await handleResponse(url, 'DELETE');

  return result;
}
