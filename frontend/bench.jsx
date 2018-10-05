import React from 'react';
import ReactDOM from 'react-dom';
import { signupUser, logout, loginUser } from "./util/session_api_util";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  window.signupUser = signupUser;
  window.logout = logout;
  window.loginUser = loginUser;
  
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
