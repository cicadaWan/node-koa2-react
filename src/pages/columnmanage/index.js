import React, { Component } from 'react';
import { Table, Button, message, Menu, Icon } from 'antd';
// import fetch from '../../utils/fetch.js';
import ColumnManage from '../../components/columnmodal/';
// import Pagination from '../../../components/pagination/';
import './index.less';

export default class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manageList: [],
      isShowModal: false,
      editData: {},
      loading: false,
    };
    this.curPage = 0;
    this.disableNext = false;
    this.editColumn = this.editColumn.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.addArticle = this.addArticle.bind(this);
    // this.handlePaginationChange = this.handlePaginationChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.jumpArticleManage = this.jumpArticleManage.bind(this);
    this.dataSource = [
      {
        
      }
    ]
    this.manageColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '栏目名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '栏目(code)',
        dataIndex: 'code',
        key: 'code',
      },
      {
        title: '操作管理',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => {
          return (
            <a href="javascript:;" onClick={() => this.editColumn(record)}>编辑</a>
          );
        },
      },
    ];
  }

  componentDidMount() {
    // this.getColumnList();
  }
  // getColumnList(next = false) {
  //   this.setState({
  //     loading: true,
  //   });
  //   // fetch('/info/column/list.json', {
  //   //   body: {
  //   //     pageSize: 20,
  //   //     curPage: this.curPage,
  //   //   },
  //   // }).then(({ flag, data, msg }) => {
  //   //   if (flag === 1) {
  //   //     this.disableNext = data.queryResultList.length < 20;
  //   //     this.setState({
  //   //       manageList: data.queryResultList,
  //   //     });
  //   //   } else {
  //   //     message.error(msg);
  //   //   }
  //   //   this.setState({
  //   //     loading: false,
  //   //   });
  //   // }).catch(() => {
  //   //   this.setState({
  //   //     loading: false,
  //   //   });
  //   //   message.error('系统错误，请稍后再试');
  //   // });
  // }
  addArticle() {
    this.setState({
      isShowModal: true,
      editData: {},
    });
  }
  editColumn(record) {
    this.setState({
      isShowModal: true,
      editData: record,
    });
  }
  // 分页
  // handlePaginationChange(curPage) {
  //   const next = curPage - this.curPage > 0;
  //   this.curPage = curPage;
  //   this.getColumnList(next);
  // }
  // 控制弹窗显隐
  changeStatus(cancel) {
    this.setState({
      isShowModal: cancel,
    });
  }
  // 弹窗内容处理ok事件
  // handleSubmit({ name, code }, id) {
  //   // fetch('/info/column/save.json', {
  //   //   body: {
  //   //     name,
  //   //     code,
  //   //     id,
  //   //   },
  //   // }).then(({ flag, msg }) => {
  //   //   if (flag === 1) {
  //   //     message.success('提交成功');
  //   //     this.getColumnList();
  //   //   } else {
  //   //     message.error(msg);
  //   //   }
  //   // });
  // }
  // jumpArticleManage() {
  //   this.props.history.replace('/view/article/manage');
  // }

  render() {
    return (
      <div>
        <Menu mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" onClick={this.jumpArticleManage}>
            <Icon type="bars" theme="outlined" />文章管理列表
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="bars" theme="outlined" />栏目管理
          </Menu.Item>
        </Menu>
        <div className="table-content">
          <Button
            className="add-column"
            type="primary"
            onClick={this.addArticle}
          >
          增加栏目
          </Button>
          <div style={{ clear: 'both' }} />
          <Table
            className="manage-table"
            columns={this.manageColumns}
            dataSource={this.state.manageList}
            rowKey={record => record.id}
            pagination={false}
            loading={this.state.loading}
          />
        </div>
        {/* <Pagination
          current={this.curPage}
          disableNext={this.disableNext}
          onChange={this.handlePaginationChange}
        /> */}
        <ColumnManage
          isShowModal={this.state.isShowModal}
          cancel={this.changeStatus}
          handleSubmit={this.handleSubmit}
          editData={this.state.editData}
        />
      </div>
    );
  }
}
