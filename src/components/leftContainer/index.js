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
      const {location: {pathname}} = this.props;
      const flag = localStorage.getItem('userName');
      return (
        <div>
          <Header />
          <Row>
            {
              flag ?
              <Col span={4}>
              <Menu defaultSelectedKeys={[pathname]}>
                <Menu.Item key="/people">
                  <Link to={'/people'}>人群</Link>
                </Menu.Item>
                <Menu.Item key="/company">
                  <Link to={'/company'}>公司主页标签</Link>
                </Menu.Item>
                <Menu.Item key="/management">
                  <Link to={'/management'}>管理列表</Link>
                </Menu.Item>
                <Menu.Item key="/hook">
                  <Link to={'/hook'}>react hook</Link>
                </Menu.Item>
              </Menu>
            </Col>
            :
            null
            }
           <Col span={ flag ? 20 : 24}>
              <Inner {...props} />
           </Col>
        </Row>
        </div>
      );
    }
  };
};
export default Container;