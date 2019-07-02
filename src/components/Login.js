import React from 'react';
import UserInfo from '../utils/UserInfo';

const Login = () => {
  var userInfo = new UserInfo('', 'result.data.userid', 'UserName', 'Email');
  sessionStorage.setItem('userinfo', JSON.stringify(userInfo));

  window.location.href = '#';

  return;
};

export default Login;
