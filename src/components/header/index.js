import React, { Component } from 'react';
import { Notification, Dropdown, Menu, Icon, } from 'antd';
import './index.less';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="javascript:;">登录个人账号</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="javascript:;">意见反馈</a>
    </Menu.Item>
    <Menu.Divider />
  </Menu>
);

export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
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