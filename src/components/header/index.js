import React, { Component } from 'react';
import { Notification, Dropdown, Menu, Icon, message, } from 'antd';
import { PropTypes } from 'prop-types';
import { logout } from '../../api';
import './index.less';

export default class Header extends React.Component{
  static contextTypes = {
    router: PropTypes.object,
  }
  constructor(props){
    super(props);
    this.state = {
    }
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    logout(localStorage.getItem('userName')).then(({ data }) => {
      console.log(data, 'da12')
      if (data.flag === 1) {
        message.success(data.message);
        localStorage.removeItem('userName');
        setTimeout(() => {
          this.context.router.push('/home');
        }, 2000)
      }
    })
  }
  render(){
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="javascript:;" onClick={this.handleLogout}>退出</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="javascript:;">意见反馈</a>
        </Menu.Item>
        <Menu.Divider />
      </Menu>
    );
    return(
      <div className="header-container">
        <span className="name">node+mysql+koa2的管理后台</span>
        <Dropdown overlay={menu} trigger={['click']}>
            <span className="ant-dropdown-link" href="#">
              个人系统
              <Icon type="down" />
            </span>
        </Dropdown>
      </div>
    )
  }
}