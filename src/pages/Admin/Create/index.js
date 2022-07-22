import React, { useContext, useState } from 'react';
import cn from 'classnames';

import UserContext from '../../../UserContext';
import TextEditor from '../../../components/TextEditor';

import style from './index.module.css';

function Create() {
  const { user } = useContext(UserContext);
  const [articleData, setArticleData] = useState({
    category: '',
    title: '',
    content: '',
    user: user?.username,
    image: [],
    thumbnail: []
  });

  function fetchData(body) {
    const formData = new FormData();

    formData.append('category', body.category);
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
        setArticleData({
          category: '',
          title: '',
          content: '',
          image: [],
          thumbnail: []
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  const creteArticle = () => {
    fetchData(articleData);
    setArticleData({
      category: '',
      title: '',
      content: '',
      user: user?.username,
      image: [],
      thumbnail: []
    });
  };


  const handleSubmit = e => {
    const field = e.target.name;

    setArticleData({ ...articleData, [field]: e.target.value });
  };

  const handleSubmitTextEditor = textEditorValue => {

    setArticleData({ ...articleData, content: textEditorValue });
  };

  const handleSubmitFiles = e => {
    const field = e.target.name;

    setArticleData({ ...articleData, [field]: e.target.files[0] });
  };

  return (
    <form className={cn(style.createArticle)} >
      <div div >
        <div className={cn(style.labelSelect)} >Select category</div>
        <select
          name='category'
          required value={articleData.category}
          className={cn(style.selectCategory)}
          placeholder='Category' onChange={handleSubmit}>
          <option value=''>Category</option>
          <option value='People' >People </option>
          <option value='Places' >Places</option>
          <option value='Events' >Events</option>
        </select>
      </div >
      <div>
        <div className={cn(style.labelTitle)}>Title</div>
        <input
          name='title'
          required
          className={cn(style.inputTitleArticle)}
          placeholder='Title'
          value={articleData.title} onChange={handleSubmit} type='text' />
      </div>
      <div className={cn(style.labelContent)}>Content</div>
      <div className={cn(style.texEditorContent)}>
        <TextEditor
          name='content'
          required
          value={articleData.content}
          onChange={handleSubmitTextEditor}
          type='text'
        />
      </div>

      <div>
        <label className={cn(style.labelFile)} htmlFor='image'>Add main picture
          <input id='image'
            required
            className={cn(style.inputFile)}
            accept='.jpg, .png' name='image'
            files={articleData.image}
            placeholder='Main picture'

            onChange={handleSubmitFiles}
            type='file' />
        </label>
      </div>
      <div>
        <label className={cn(style.labelFile)} htmlFor='thumbnail'>Add additional picture
          <input id='thumbnail'
            required
            className={cn(style.inputFile)}
            accept='.jpg, .png'
            name='thumbnail' files={articleData.thumbnail}
            placeholder='Additional picture'
            onChange={handleSubmitFiles}
            type='file' />
        </label>
      </div>
      <div>
        <button className={cn(style.btnCreateArticle)} type='submit' onClick={creteArticle}>
          Create
        </button>
      </div>
    </form >
  );
}

export default Create;
