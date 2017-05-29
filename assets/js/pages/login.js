import React from 'react';
import ReactDOM from 'react-dom';
// import HomePageContainer from '../containers/HomePageContainer';

const Login = () => (
  <button
    type="button"
    className="btn btn-info"
    href="{% url 'social:begin' 'twitter' %}"
  >
  Login with Twitter
 </button>
);


ReactDOM.render(<Login />, document.getElementById('login-page'));
