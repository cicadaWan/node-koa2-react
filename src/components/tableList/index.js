import React, { Component } from 'react';
import { Table, Modal } from 'antd';
import './index.less'
import { inject, observer } from 'mobx-react';

@inject('companystore')
@observer
export default class NavBar extends Component{
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.companyColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id', 
      },
      {
        title: '公司名称',
        dataIndex: 'compName',
        key: 'companyName', 
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime', 
        render: (text, record) => {
          const t = new Date(record.createTime);
          const time = `${t.getFullYear()}-${t.getMonth()}-${t.getDay()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
          return (
            <span>{time}</span>
          )
        }
      },
      {
        title: '结束时间',
        dataIndex: 'endTime',
        key: 'endTime', 
        render: (text, record) => {
          const t = new Date(record.createTime);
          const time = `${t.getFullYear()}-${t.getMonth()}-${t.getDay()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
          return (
            <span>{time}</span>
          )
        }
      },
      {
        title: '操作管理',
        dataIndex: 'action',
        key: 'action', 
        render: (text, record) => {
          return (
            <div>
              <a href="javascript:;" onClick={() => {this.handleUpdate(record)}}>更新 | </a>
              <a href="javascript:;" onClick={() => this.handleDelete(record)}>删除</a>
            </div>
          )
        }
      },
    ]
  }
  
  handleDelete(record) {
    const that = this;
    Modal.confirm({
      title: `你确定删除${record.compName}有关的信息吗？`,
      okText: '确定',
      cancelText: '取消',
      okType: 'danger',
      onOk() {
        that.props.companystore.handleDeleteData(record.id)
      },
      onCancel() {

      }
    })
  }

  // 更新
  handleUpdate(record) {
    const { companystore: { changeCompanyModal, update } } = this.props;
    changeCompanyModal();
    update(record);
  }

  
  render(){
    return(
      <div>
         <Table
          columns={this.companyColumns} 
          dataSource={this.props.companyList}
          rowKey={(record => record.id)}
         />
      </div>
    )
  }
  }