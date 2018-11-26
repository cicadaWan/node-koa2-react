import React, { Component } from 'react';
import { Modal, Row, Form, Col, Input, Button } from 'antd';
import { addList } from '../../api';
import { toJS } from 'mobx';
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react';


const FormItem = Form.Item;
@Form.create()
@inject('companystore')
@observer
export default class companyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.onCancel = this.onCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  onCancel() {
    this.props.companystore.changeCompanyModal();
    this.props.companystore.update('');
  }
  handleSubmit(e) {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if(!err) {
        console.log(toJS(this.props.companystore.updateData));
        const id = toJS(this.props.companystore.updateData).id;
        if (toJS(this.props.companystore.updateData) === '') {
          this.props.companystore.add(values.compName);
        } else {
          this.props.companystore.handleUpdateCompany({ compName:values.compName, id });
          this.props.companystore.update('');
        }
        this.onCancel();
      }
    })
  }
  render() {
    const { form: { getFieldDecorator }, companystore: { isShowModal, updateData } } = this.props;
    const initialName = toJS(updateData) !== 'undefined' ? toJS(updateData).compName : '';
    console.log(initialName, 'initialName是');
    return (
      <Modal
        title="增加栏目"
        visible={isShowModal}
        footer={null}
        closable={false}
      >
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col>
            <FormItem label="请输入公司名称">
                  {
                    getFieldDecorator('compName', {
                      initialValue: initialName,
                    })(
                      <Input autoComplete="off" />
                    )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Button type="default" onClick={this.onCancel}>取消</Button>
          <Button type="primary" htmlType="submit">确认</Button>
        </Row>
      </Form>
    </Modal> 
    )
  }
}