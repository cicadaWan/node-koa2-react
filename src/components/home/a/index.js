import React from 'react';
import { Row, Col, Button, Table, message, Form, Input, DatePicker } from 'antd';

const FormItem = Form.Item;
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
class PopManageSearch extends React.Component {
  
  constructor(props) {
    super(props);
    console.log(props.add);
    this.state = {};
    this.dataSource = [
      {
        name: 'an',
        address: '1233'
      },
      {
        name: 'an',
        address: '1233'
      },
      {
        name: 'an',
        address: '1233'
      },
    ]
    this.PopManageColumns = [
      {
        title: '操作时间',
        key: 'modifytime',
        dataIndex: 'modifytime',
      },
      {
        title: '创建人',
        key: 'creatorName',
        dataIndex: 'creatorName',

      },
      {
        title: '人群名称',
        key: 'taskName',
        dataIndex: 'taskName',
      },
      {
        title: '人群描述',
        key: 'filterContent',
        dataIndex: 'filterContent',
        render: (record) => {
          return (
            <p>
              性别：男；
              <a href="javascript:;" onClick={record => this.props.add('123')}>查看更多</a>
            </p>
          )
        }
      },
    ];
    
  }

  componentDidMount() {
  }

  
 
  render() {
    return (
      <div className="container">
        <Table
          className="pop-manage-container"
          columns={this.PopManageColumns}
          dataSource={this.dataSource}
          rowKey={record => record.taskId}
          pagination={{
            totall: 200,
            current: 0,
            pageSize: 15,
            hideOnSinglePage: true,
          }}
        />
      </div>
    );
  }
}
export default Form.create()(PopManageSearch);
