import React, { useState } from 'react';
import { Button, TextInputField } from 'evergreen-ui';
import cn from 'classnames';

import style from './index.module.css';

function IdentificationModal({ show, visible, onLogin }) {
  const closeModal = () => {
    visible(false);
  };
  const rootClasses = [style.IdentificationModal];

  if (show) {
    rootClasses.push(style.active);
  }
  const [formData, updateFormData] = useState({ username: '', password: '' });
  const [formError, updateFormError] = useState({
    username: null,
    password: null
  });

  const validator = str => {
    if (str.length === 0) {
      return 'This field is required';
    }

    return null;
  };

  const validate = () => {
    const errors = {
      username: validator(formData.username),
      password: validator(formData.password)
    };

    updateFormError(errors);

    return Object.values(errors).every(e => e == null);
  };

  function fetchData(url, body) {
    return fetch(`/user/${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        }

        return Promise.reject(resp.json());
      })
      .then(token => {
        onLogin(token, { username: formData.username });
        closeModal();
      })
      .catch(error => {
        error.then(e => updateFormError({ username: e.message }));
      });
  }

  const loginUser = () => {
    const isValid = validate(formData);

    if (isValid) {
      fetchData('login', formData);
    }
  };

  const addNewUser = () => {
    const isValid = validate(formData);

    if (isValid) {
      fetchData('signup', formData);
    }
  };

  const handleChange = e => {
    const field = e.target.name;

    updateFormData({ ...formData, [field]: e.target.value });
    updateFormError({ ...formError, [field]: null });
  };

  return (
    <div className={cn(rootClasses.join(' '))}>
      <div className={cn(style.ModalContent)}>
        <form >
          <TextInputField
            isInvalid={formError.username !== null}
            required
            label='Username'
            validationMessage={formError.username}
            value={formData.username}
            name='username'
            onChange={handleChange}
            type='text'
            placeholder='username'
          />
          <TextInputField
            isInvalid={formError.password !== null}
            required
            label='Password'
            validationMessage={formError.password}
            value={formData.password}
            name='password'
            onChange={handleChange}
            type='password'
            placeholder='password'
          />
          <div className={cn(style.modalButtons)}>
            <Button onClick={closeModal}>Cancel</Button>
            <Button type='button' onClick={loginUser}>Log In</Button>
            <Button type='button' onClick={addNewUser}>Sign Up</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IdentificationModal;
