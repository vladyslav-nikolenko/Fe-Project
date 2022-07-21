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
import TextEditor from '../../../components/TextEditor';
// import CATEGORIES from '../../../Constants';

// import style from './index.module.css';

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
  };


  const handleSubmit = e => {
    const field = e.target.name;

    setArticleData({ ...articleData, [field]: e.target.value });
  };

  const handleSubmitTextEditor = textEditorValue => {

    setArticleData({ ...articleData, content: textEditorValue });
    console.log(textEditorValue);
  };

  const handleSubmitFiles = e => {
    const field = e.target.name;

    setArticleData({ ...articleData, [field]: e.target.files[0] });
  };

  return (
    <form>
      <div>
        <div>Select category</div>
        <select name='category' value={articleData.category}
          placeholder='Category' onChange={handleSubmit}>
          <option value=''>Category</option>
          <option value='People' >People </option>
          <option value='Places' >Places</option>
          <option value='Events' >Events</option>
        </select>
      </div>
      <div>
        <div>Title</div>
        <input name='title' placeholder='Title'
          value={articleData.title} onChange={handleSubmit} type='text' />
      </div>
      <div>Content</div>

      <TextEditor
        name='content'
        required
        value={articleData.content}
        onChange={handleSubmitTextEditor}
        type='text'
      />

      <div>
        <div>Main picture</div>
        <input accept='.jpg, .png' name='image' files={articleData.image} placeholder='Main picture'
          // onChange={handleSubmit}
          onChange={handleSubmitFiles}
          type='file' />
      </div>
      <div>
        <div>Additional picture</div>
        <input accept='.jpg, .png' name='thumbnail' files={articleData.thumbnail} placeholder='Additional picture'
          // onChange={handleSubmit}
          onChange={handleSubmitFiles}
          type='file' />
      </div>
      <div>
        <button type='button' onClick={creteArticle}>
          Create
        </button>
      </div>
      {/* <Pane width='800px'>
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
        <TextEditor

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

      </Pane> */}
      {/* <div>
        <div>Select category</div>
        <select name='category' value={articleData.category}
          placeholder='Category' onChange={handleSubmit}>
          <option value=''>Category</option>
          <option value='People' >People </option>
          <option value='Places' >Places</option>
          <option value='Events' >Events</option>
        </select>
      </div>
      <div>
        <div>Title</div>
        <input name='title' placeholder='Title'
          value={articleData.title} onChange={handleSubmit} type='text' />
      </div>
      <div>
        <div>Content</div>
        <textarea name='content' value={articleData.content}
          placeholder='Content' onChange={handleSubmit} type='text' />
      </div>
      <div>
        <div>Main picture</div>
        <input name='image' value={articleData.image} placeholder='Main picture'
          onChange={handleSubmit}
          // onChange={value => {
          //   updateArticleData({ ...articleData, image: value[0] });
          // }}
          type='file' />
      </div>
      <div>
        <div>Additional picture</div>
        <input accept='.jpg, .png' name='thumbnail' value={articleData.thumbnail} placeholder='Additional picture'
          onChange={handleSubmit}
          // onChange={value => {
          //   updateArticleData({ ...articleData, thumbnail: value[0] });
          // }}
          type='file' />
      </div>
      <div>
        <button type='button' onClick={creteArticle}>
          Create
        </button>
      </div> */}
    </form >
  );
}

export default Create;
