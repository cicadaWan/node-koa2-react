import React, { Component } from 'react';
import { Row, Form, Col, Button, Input } from 'antd';
import Table from '../../components/tableList';
import EditModal from '../../components/modal/companyModal';
import FormItem from 'antd/lib/form/FormItem';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
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
@inject('companystore')
@observer
class Company extends Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  };
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { companystore: {getCompanyList} } = this.props;
        getCompanyList(values.id);
      }
    });
  }
   
  componentDidMount() {
    // todo: 这块有问题
    const { companystore: {getCompanyList} } = this.props;
    getCompanyList('');
  };
  // 增加公司
  handleAdd() {
    this.props.companystore.changeCompanyModal();
  }

  render(){
    const { form: { getFieldDecorator }, companystore: { companyList, getCompanyList } } = this.props;
    return(
       <div className="container company-container">
        <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col span={12}>
                <FormItem label="搜索ID:" {...formItemLayout}>
                  {getFieldDecorator('id', {
                  rules: [{ required: true, message: '请输入搜索id' }],
                initialValue: '',
              })(
                <Input />
              )}
                </FormItem>
              </Col>
              <Col span={12} className="button-content">
                <FormItem>
                  <Button type="primary" htmlType="submit">搜索</Button>
                  <Button type="primary" onClick={this.handleAdd}>增加</Button>
                </FormItem>
              </Col>
            </Row>
          </Form>
          <Table
            rowKey={record => record.id}
            companyList={toJS(companyList)}
            getCompanyList = {getCompanyList}
          />
          <EditModal />
       </div>
    )
  }
  }
  export default Form.create()(Company);