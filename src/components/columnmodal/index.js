import React, { Component } from 'react';
import { Form, Row, Col, Input, Modal, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import './index.less';

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
class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    }
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps);
    // if (nextProps.isShowModal == false) {
    //   return false;
    // }
    // return true;
    // console.log(nextProps, nextState)
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('子组件渲染')
  }
  handleClick() {
    this.setState({
      number: this.state.number,
    })
  }
  handleCancel() {
    this.props.cancel(false);
    this.props.form.resetFields();
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { editData } = this.props;
        const id = editData.id || '';
        this.props.handleSubmit(values, id);
        this.props.cancel(false);
        this.props.form.resetFields();
      }
    });
  }
  render() {
    console.log('打开父组件的时候看弹窗是否被调用了')
    const { form: { getFieldDecorator }, isShowModal, editData } = this.props;
    const length = Object.keys(editData).length;
    return (
      <Modal
        title={length === 0 ? '增加栏目' : '编辑栏目'}
        closable={false}
        visible={isShowModal}
        footer={null}
      >
        <Button type="primary" onClick={this.handleClick}>点击</Button>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col span={24}>
              <FormItem label="栏目名:" {...formItemLayout}>
                {getFieldDecorator('name', {
                rules: [{ required: true, message: '请填写栏目名' }],
               initialValue: editData.name,
             })(
               <Input />
             )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <FormItem label="栏目code:" {...formItemLayout}>
                {getFieldDecorator('code', {
               rules: [{ required: true, message: '请填写栏目code' }],
               initialValue: editData.code,
             })(
               <Input />
             )}
              </FormItem>
            </Col>
          </Row>
          <Button className="search-company" type="primary" htmlType="submit">确认</Button>
          <Button className="add-file" type="default" onClick={this.handleCancel}>取消</Button>
        </Form>
      </Modal>
    );
  }
}
const addarticle = Form.create()(AddArticle);
export default addarticle;
