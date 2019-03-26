import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.less';

export default class Home extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home-container"> 
        <h3>*欢迎登陆个人后台管理系统*</h3>
        <Link to={"/register"}>注册</Link>
        <Link to={"/login"}>登录</Link>
      </div>
    )
  }
}