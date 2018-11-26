import React, { Component } from 'react';
import { Menu, Icon, Row, Col } from 'antd';
import { Link } from 'react-router';
import Header from '../header';

const Container = Inner => {
  return class RefsHOC extends React.Component {
    
    render() {
      const props = {
        ...this.props
      };
      console.log(this.props,'this.props是')
      return (
        <div>
          <Header />
          <Row>
            <Col span={4}>
              <Menu>
                <Menu.Item>
                  <Link to={'/register'}>注册</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={'/login'}>登录</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={'/home'}>首页</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={'/company'}>公司主页标签</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={'/management'}>管理列表</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={'/hook'}>react hook</Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col span={20}>
              <Inner {...props} />
            </Col>
        </Row>
        </div>
      );
    }
  };
};
export default Container;