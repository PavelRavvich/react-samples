import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm'

const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '/posts',
    label: 'Posts'
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
