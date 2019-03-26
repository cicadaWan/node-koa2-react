import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, message} from 'antd';
import PropTypes from 'prop-types';
import { login } from '../../api';
import '../register/index.less';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const FormItem = Form.Item;
class Login extends React.Component{
  static contextTypes = {
    router: PropTypes.object,
  }
  constructor(props){
    super(props);
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkConfirm = this.checkConfirm.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.checkName = this.checkName.bind(this);
  }
  checkName(rule, value, callback) {
    const reg = /[\u4e00-\u9fa5]/;
    let text;
    if (!value) {
      text = '请输入用户名'
    } else if (!reg.test(value)) {
      text = '请输入中文字符'
    }
    callback(text);
  }
  checkConfirm(rule, value,callback) {
    const reg = /^[a-zA-Z0-9]{6,12}$/;
    let text;
    if (!value) {
      text = '密码不能为空'
    } else if (!reg.test(value)) {
      text = '密码格式不正确，请输入6到12位的数字英文结合的密码'
    }
    callback(text);
  }
  checkPassword(rule, value, callback) {
    const form = this.props.form;

    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入密码不一致，请重新输入')
    }
    callback();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, value) => {
      if (!err) {
        console.log(value);
        const param = {
          name: value.name,
          password: value.password,
        }
        console.log(param);
        login(param).then(({ data }) => {
          console.log(data)
          if (data.flag === 1) {
            message.success(data.message);
            localStorage.setItem('userName', value.name);
            setTimeout(() => {
              console.log(this, 'this是')
              this.context.router.push('/company');
            }, 1000);
          } else {
            message.error(data.message);
          }
        }).catch(() => {
          console.log('登录失败')
        })
      }
    })
  }
  render(){
    const { form: { getFieldDecorator } } = this.props;
    return(
      <div className="register-container">
          <h3>欢迎登录后台管理系统</h3>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col span={12}>
                  <FormItem label="用户名" {...formItemLayout}>
                    {getFieldDecorator('name', {
                    rules: [{ required: true},
                    {
                    validator: this.checkName,
                    }],
                    initialValue: '',
                  })(
                    <Input autoComplete="off" />
                  )}
                  </FormItem>
                </Col>
            </Row>
            <Row>
              <Col span={12}>
                  <FormItem label="密码" {...formItemLayout}>
                    {getFieldDecorator('password', {
                    rules: [{ 
                      required: true,
                    },
                    {
                    validator: this.checkConfirm,
                    }],
                    initialValue: '',
                  })(
                    <Input type="password" autoComplete="off" />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <FormItem label="请再次输入密码" {...formItemLayout}>
                  {getFieldDecorator('againPassword', {
                  rules: [{ required: true, message: '请再次输入密码' },
                  {
                    validator: this.checkPassword,
                  }],
                  initialValue: '',
                })(
                  <Input type="password" autoComplete="off" />
                )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Button type="primary" htmlType="submit">登录</Button>
            </Row>
          </Form>
      </div>
    )
  }
}
export default Form.create()(Login);