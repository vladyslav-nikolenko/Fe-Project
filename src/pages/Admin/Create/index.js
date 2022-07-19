import React, { useContext, useState } from 'react';
import {
  Button,
  Combobox,
  FilePicker,
  Pane,
  Textarea,
  TextInput
} from 'evergreen-ui';

import UserContext from '../../../UserContext';
// import CATEGORIES from '../../../Constants';

// import style from './index.module.css';

function Create() {
  const { user } = useContext(UserContext);
  const [articleData, updateArticleData] = useState({
    category: '',
    title: '',
    content: '',
    user: user?.username,
    image: null,
    thumbnail: null
  });

  function fetchData(body) {
    const formData = new FormData();

    formData.append('category', body.category);
    // formData.append(
    //   'categoryUrl',
    //   CATEGORIES.find(({ label }) => label === body.category)?.url
    // );
    formData.append('title', body.title);
    formData.append('content', body.content);
    formData.append('image', body.image);
    formData.append('thumbnail', body.thumbnail);

    return fetch(`/articles`, {
      method: 'POST',
      body: formData
    })
      .then(resp => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        }

        return Promise.reject(resp.json());
      })
      .then(() => {
        console.log('Form added');
        updateArticleData({
          category: '',
          title: '',
          content: '',
          image: '',
          thumbnail: null
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  const creteArticle = () => {
    fetchData(articleData);
  };

  const handleSubmit = e => {
    const field = e.target.name;

    updateArticleData({ ...articleData, [field]: e.target.value });
  };

  return (
    <form>
      <Pane width='800px'>
        <Combobox
          // items={CATEGORIES.map(x => x.label)}
          items={['Places', 'People', 'Events']}
          name='category'
          placeholder='Category'
          required
          value={articleData.category}
          onChange={value => {
            updateArticleData({ ...articleData, category: value });
          }}
          type='text'
        />
        <TextInput
          name='title'
          width='800px'
          marginY='10px'
          placeholder='Title'
          required
          value={articleData.title}
          onChange={handleSubmit}
          type='text'
        />
        <Textarea
          name='content'
          required
          value={articleData.content}
          onChange={handleSubmit}
          type='text'
        />
        <FilePicker
          name='image'
          required
          placeholder='Main picture'
          value={articleData.image}
          onChange={value => {
            // console.log(value[0]);
            updateArticleData({ ...articleData, image: value[0] });
          }}
          type='file'
        />
        <FilePicker
          name='thumbnail'
          marginY='10px'
          placeholder='Additional picture'
          value={articleData.thumbnail}
          onChange={value => {
            updateArticleData({ ...articleData, thumbnail: value[0] });
          }}
          type='file'
        />
        <Button type='button' onClick={creteArticle}>
          Create
        </Button>
      </Pane>
    </form>
  );
}

export default Create;
